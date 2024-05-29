//import { connectDB } from "@/libs/mongodb";
import clientPromise from "@/libs/mongodb";
import  Usuarios from "@/models/usuarios";
import { NextResponse } from "next/server";

//Función GET para obtener todos los usuarios
export async function GET() {
    //NUEVA FORMA
    //Conexion a la base de datos
    const client = await clientPromise;
    const db = client.db();
    const terapeutas = await db.collection("users").find({}).toArray();
    return NextResponse.json({ terapeutas });
    
}


export async function POST(request) {
    //NUEVA FORMA
    //Conexion a la base de datos
    const client = await clientPromise;
    const data = await request.json();
    const db = client.db();
    const userExists = await db.collection("users").findOne({ correo: data.correo });
      
   if(!userExists){
      const result = await db.collection("users").insertOne(data);
      return NextResponse.json({ result, message: "Usuario creado" });
    } else{ 
    } 
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectDB();
    await Usuarios.findByIdAndDelete(id);
    return NextResponse.json({ message: "Usuario eliminado" });
}