import { connectDB } from "@/libs/mongodb";
import  Usuarios from "@/models/usuarios";
import PerfilTerapeutas from "@/models/perfil_terap";
import { NextResponse } from "next/server";

//Función GET para obtener todos los terapeutas
export async function GET() {
    await connectDB();
    const terapeutas = await Usuarios.find({ role: "terapeuta" });
    return NextResponse.json({ terapeutas });
}

export async function POST(request) {
    await connectDB();
    const data = await request.json();
    const terapeutaExists = await Usuarios.findOne({ correo: data.correo });

    if (!terapeutaExists) {
        const nuevoTerapeuta = await Usuarios.create({ ...data, role: "terapeuta" }); // Crea un nuevo terapeuta
        // Crear el perfil del terapeuta con los datos proporcionados
        const perfilTerapeuta = await PerfilTerapeutas.create({
            usuarioId: nuevoTerapeuta._id,
            nombre: data.nombre,
            apellidoPaterno: data.apellidoPaterno,
            apellidoMaterno: data.apellidoMaterno,
            celular: data.celular,
            // Los campos no proporcionados se dejarán vacíos o con valores predeterminados
        });
        return NextResponse.json({ terapeuta: nuevoTerapeuta, perfil: perfilTerapeuta }); // Devuelve la respuesta con el terapeuta y perfil creado
    } else {
        return NextResponse.json({ message: "Terapeuta ya existe" });
    }
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectDB();
    await Usuarios.findByIdAndDelete(id);
    return NextResponse.json({ message: "Terapeuta eliminado" });
}