import { connectDB } from "@/libs/mongodb";
import  Usuarios from "@/models/usuarios";
import { NextResponse } from "next/server";

//Función GET para obtener todos los usuarios
export async function GET() {
    await connectDB();
    const usuarios = await Usuarios.find({});
    return NextResponse.json({ usuarios });
}


export async function POST(request) {
    await connectDB();
    const data = await request.json();
    const userExists = await Usuarios.findOne({ correo: data.correo });
    if (!userExists) {
        const usuarios = await Usuarios.create(data);
        return NextResponse.json({ usuarios , message: "Usuario creado"});
    } else{
        //Si el usuario ya existe, no hace nada
        return NextResponse.json({ message: "correo"});
    }
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectDB();
    await Usuarios.findByIdAndDelete(id);
    return NextResponse.json({ message: "Usuario eliminado" });
}