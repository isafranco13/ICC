import { connectDB } from "@/libs/mongodb";
import PerfilTerapeutas from "@/models/perfil_terap";
import { NextResponse } from "next/server";

// Función para manejar la obtención de un perfil de terapeuta por ID
export async function GET(request, { params }) {
    try {
        await connectDB(); // Conectar a la base de datos
        const perfil = await PerfilTerapeutas.findOne({ usuarioId: params.id }); // Buscar el perfil por ID
        if (!perfil) {
            return NextResponse.json({ message: 'Perfil no encontrado' }, { status: 404 });
        }
        return NextResponse.json(perfil); // Devolver el perfil en formato JSON
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 }); // Manejar errores
    }
}

// Función para manejar la actualización de un perfil de terapeuta por ID
export async function PUT(request, { params }) {
    try {
        await connectDB(); // Conectar a la base de datos
        const data = await request.json(); // Obtener los datos del cuerpo de la solicitud
        const perfil = await PerfilTerapeutas.findOneAndUpdate(
            { usuarioId: params.id }, // Buscar el perfil por ID
            data, // Actualizar con los nuevos datos
            { new: true } // Devolver el perfil actualizado
        );
        if (!perfil) {
            return NextResponse.json({ message: 'Perfil no encontrado' }, { status: 404 });
        }
        return NextResponse.json(perfil); // Devolver el perfil actualizado en formato JSON
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 }); // Manejar errores
    }
}
