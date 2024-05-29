//import { connectDB } from "@/libs/mongodb";
import clientPromise from "@/libs/mongodb";
import  Historial from "@/models/historial";
import { NextResponse } from "next/server";
import { ObjectId } from 'mongodb';


//Obtener todos los historiales
//Cambiar a obtener uno solo cuando se selecciona un historial
export async function GET(req, {params}) {
    //Toma datos de la URL y los pasa a la variable nombre
    //http://localhost:3000/api/historial?name=Jane%20Ortega -> Ejemplo 
    //solo se toma el nombre en este caso
    const url = new URL(req.url);
    const nombre = url.searchParams.get('name');
    //console.log("nombre", nombre);

    //Conexion a la base de datos
    //Copias esto mismo para la conexion a la base
    const client = await clientPromise;
    const db = client.db();
    //const nombre = req.params;
    
    //db.collection es en que carpeta se van a buscar
    //findOne es para buscar un solo elemento por medio de una etiquetra dentro de la coleccion en mongo
    const historial = await db.collection("historial").findOne({name: nombre});

    if (historial) {
        return NextResponse.json({ historial });
    } else {
        return NextResponse.json({ message: 'Historial no encontrado' });
    }
}


//Insertar nuevo historial
export async function POST(request) {
    //Conexion a la base de datos
    const client = await clientPromise;
    const data = await request.json();
    const db = client.db();
    const historialExists = await db.collection("historial").findOne({ name: data.name });
      
   if(!historialExists){
      const result = await db.collection("historial").insertOne(data);
      return NextResponse.json({ result, message: "Historial creado" });
    } else{
        //En caso de que ya exista un historial, solo se actualizaran los campos requeridos
        const result = await db.collection("historial").updateOne({ name: data.name }, { $set: data });
        return NextResponse.json({ result, message: "Historial actualizado" });
        
    }
}