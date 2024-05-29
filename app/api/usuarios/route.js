//import { connectDB } from "@/libs/mongodb";
import clientPromise from "@/libs/mongodb";
import { ObjectId } from "mongodb"; // Importa ObjectId
import { NextResponse } from "next/server";

//Función GET para obtener todos los usuarios
export async function GET() {
    const client = await clientPromise;
    const db = client.db();
    const usuarios = await db.collection("users").find({ "roles.0": "user" }).toArray();
    return NextResponse.json({ usuarios });
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