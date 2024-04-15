import { connectDB } from "@/libs/mongodb";
import  Usuarios from "@/models/usuarios";
import { NextResponse } from "next/server";

//Función GET para obtener todos los usuarios
export async function GET() {
    await connectDB();
    const usuarios = await Usuarios.find({});
    return NextResponse.json({ usuarios });
}

//Función GET para obtener un usuario con una solicitud y una respuesta
export async function GET(request, response) {
    await connectDB();
    const user = await Usuarios.findOne({ _id: request.query.id });
    return NextResponse.json({ user });
}

export async function POST(request) {
    await connectDB();
    const data = await request.json();
    const userExists = await Usuarios.findOne({ correo: data.correo });
    if (!userExists) {
        const usuarios = await Usuarios.create(data);
        return NextResponse.json({ usuarios });
    } else{
        //Si el usuario ya existe, no hace nada
        return NextResponse.json({ message: "Usuario ya existe" });
    }
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectDB();
    await Usuarios.findByIdAndDelete(id);
    return NextResponse.json({ message: "Usuario eliminado" });
}