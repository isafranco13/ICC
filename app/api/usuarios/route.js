//import { connectDB } from "@/libs/mongodb";
import clientPromise from "@/libs/mongodb";
import { ObjectId } from "mongodb"; // Importa ObjectId
import { NextResponse } from "next/server";

//Función GET para obtener todos los usuarios
export async function GET() {
    //NUEVA FORMA
    ///Conexion a la base de datos
    //Copias esto mismo para la conexion a la base
    const client = await clientPromise;
    const db = client.db();
    //db.collection es en que carpeta se van a buscar
    //find es para buscar todos los elementos dentro de la coleccion en mongo
    const usuarios = await db.collection("users").find({ "roles.0": "user" }).toArray();
    return NextResponse.json({ usuarios });
    
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
    try {
        const id = request.nextUrl.searchParams.get("id");
        if (!id) {
            return NextResponse.json({ error: "ID es requerido" }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db();

        const result = await db.collection("users").deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 1) {
            return NextResponse.json({ message: "Usuario eliminado" });
        } else {
            return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
        }
    } catch (error) {
        console.error("Error al eliminar el usuario:", error);
        return NextResponse.json({ error: "Error al eliminar el usuario" }, { status: 500 });
    }
}