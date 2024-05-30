//import { connectDB } from "@/libs/mongodb";
import clientPromise from "@/libs/mongodb";
import  Terapeutas from "@/models/terapeutas";
import  PerfilTerapeutas from "@/models/perfil_terap";
import { NextResponse } from "next/server";

//Función GET para obtener todos los terapeutas
export async function GET() {
    //NUEVA FORMA 
    //Conexion a la base de datos
    const client = await clientPromise;
    const db = client.db();
    const terapeutas = await db.collection("users").find({ "roles.0": "terapeuta" }).toArray();
    return NextResponse.json({ terapeutas });
    /*await connectDB();
    const terapeutas = await Terapeutas.find({});
    return NextResponse.json({ terapeutas });*/
}

export async function POST(request) {
    //NUEVA FORMA
    ///Conexion a la base de datos
    //Copias esto mismo para la conexion a la base
    const client = await clientPromise;
    const data = await request.json();
    const db = client.db();
    //db.collection es en que carpeta se van a buscar
    //findOne es para buscar un solo elemento por medio de una etiquetra dentro de la coleccion en mongo
    const terapeutaExists = await db.collection("users").findOne({ correo: data.correo });
      
   if(!terapeutaExists){
        const result = await db.collection("users").insertOne(data);
        // Crear el perfil del terapeuta con los datos proporcionados
        const perfilTerapeuta = await db.collection("perfilterapeutas").insertOne({
            usuarioId: result.insertedId,
            nombre: data.nombre,
            apellidoPaterno: data.apellidoPaterno,
            apellidoMaterno: data.apellidoMaterno,
            celular: data.celular,
        });
        return NextResponse.json({ result, perfilTerapeuta, message: "terapeuta creado" });
    } else{
        return NextResponse.json({ message: "Terapeuta ya existe" });
    }  
    /*await connectDB();
    const data = await request.json();
    const terapeutaExists = await Usuarios.findOne({ correo: data.correo });

    if (!terapeutaExists) {
        const nuevoTerapeuta = await Usuarios.create({ ...data }); // Crea un nuevo terapeuta
        // Crear el perfil del terapeuta con los datos proporcionados
        const perfilTerapeuta = await PerfilTerapeutas.create({
            usuarioId: nuevoTerapeuta._id,
            nombre: data.nombre,
            apellidoPaterno: data.apellidoPaterno,
            apellidoMaterno: data.apellidoMaterno,
            celular: data.celular,
            // Los campos no proporcionados se dejarán vacíos o con valores predeterminados
        });
        return NextResponse.json({ terapeuta: nuevoTerapeuta, perfil: perfilTerapeuta }); // Devuelve la respuesta con el terapeuta y perfil creado
    } else {
        return NextResponse.json({ message: "Terapeuta ya existe" });
    }*/
}