import { connectDB } from "@/libs/mongodb";
//import clientPromise from "@/libs/mongodb";
import  Historial from "@/models/terapeutas";
import { NextResponse } from "next/server";

//Obtener todos los historiales
//Cambiar a obtener uno solo cuando se selecciona un historial
export async function GET() {
    await connectDB();
    const historial = await Historial.find({});
    return NextResponse.json({ historial });
}

//Insertar nuevo historial
export async function POST(request) {
    await connectDB();
    const data = await request.json();
    const historialExists = await Historial.findOne({ name: data.name });
    if (!historialExists) {
        const historial = await Historial.create(data);
        return NextResponse.json({ historial , message: "Usuario creado"});
    } else{
        
    }
}