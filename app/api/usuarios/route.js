//import { connectDB } from "@/libs/mongodb";
import clientPromise from "@/libs/mongodb";
import  Usuarios from "@/models/usuarios";
import { NextResponse } from "next/server";

//Función GET para obtener todos los usuarios
export async function GET() {
    const client = await clientPromise;
    const db = client.db();
    const terapeutas = await db.collection("users").find({}).toArray();
    return NextResponse.json({ terapeutas });
    /*await connectDB();
    const usuarios = await Usuarios.find({});
    return NextResponse.json({ usuarios });*/
}


export async function POST(request) {
    const client = await clientPromise;
    const data = await request.json();
    const db = client.db();
    const userExists = await db.collection("users").findOne({ correo: data.correo });
      
   if(!userExists){
      const result = await db.collection("users").insertOne(data);
      return NextResponse.json({ result, message: "Usuario creado" });
    } else{ 
    } 
    /*await connectDB();
    const data = await request.json();
    const userExists = await Usuarios.findOne({ nombre: data.nombre });
    if (!userExists) {
        const usuarios = await Usuarios.create(data);
        return NextResponse.json({ usuarios , message: "Usuario creado"});
    } else{
        //Si el usuario ya existe, no hace nada
        return NextResponse.json({ message: "correo"});
    }*/
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectDB();
    await Usuarios.findByIdAndDelete(id);
    return NextResponse.json({ message: "Usuario eliminado" });
}