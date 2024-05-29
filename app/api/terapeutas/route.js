//import { connectDB } from "@/libs/mongodb";
import clientPromise from "@/libs/mongodb";
import  Terapeutas from "@/models/terapeutas";
import { NextResponse } from "next/server";

//Función GET para obtener todos los terapeutas
export async function GET() {
    //NUEVA FORMA 
    //Conexion a la base de datos
    const client = await clientPromise;
    const db = client.db();
    const terapeutas = await db.collection("users").find({}).toArray();
    return NextResponse.json({ terapeutas });
    /*await connectDB();
    const terapeutas = await Terapeutas.find({});
    return NextResponse.json({ terapeutas });*/
}

export async function POST(request) {
    //NUEVA FORMA
    //Conexion a la base de datos
    const client = await clientPromise;
    const data = await request.json();
    const db = client.db();
    const terapeutaExists = await db.collection("users").findOne({ correo: data.correo });
      
   if(!terapeutaExists){
      const result = await db.collection("users").insertOne(data);
      return NextResponse.json({ result, message: "terapeuta creado" });
    } else{ 
    }  
    /*await connectDB();
    const data = await request.json();
    const terapeutaExists = await Terapeutas.findOne({ correo: data.correo });

    if (!terapeutaExists) {
        const terapeuta = await Terapeutas.create(data); // Crea un nuevo terapeuta
        return NextResponse.json({ terapeuta }); // Devuelve la respuesta con el terapeuta creado
    } else {
        return NextResponse.json({ message: "Terapeuta ya existe" });
    }*/
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectDB();
    await Terapeutas.findByIdAndDelete(id);
    return NextResponse.json({ message: "Terapeuta eliminado" });
}