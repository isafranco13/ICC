import { connectDB } from "@/libs/mongodb";
import  Terapeutas from "@/models/terapeutas";
import { NextResponse } from "next/server";

//Función GET para obtener todos los terapeutas
export async function GET() {
    await connectDB();
    const terapeutas = await Terapeutas.find({});
    return NextResponse.json({ terapeutas });
}

export async function POST(request) {
    await connectDB();
    const data = await request.json();
    const terapeutaExists = await Terapeutas.findOne({ correo: data.correo });

    if (!terapeutaExists) {
        const terapeuta = await Terapeutas.create(data); // Crea un nuevo terapeuta
    } else {
        return NextResponse.json({ message: "Terapeuta ya existe" });
    }
}