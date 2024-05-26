//import { connectDB } from "@/libs/mongodb";
import clientPromise from "@/libs/mongodb";
import  Historial from "@/models/historial";
import { NextResponse } from "next/server";
import { ObjectId } from 'mongodb';

//Obtener todos los historiales
//Cambiar a obtener uno solo cuando se selecciona un historial
export async function GET(req, {params}) {
    //Conexion a la base de datos
    const client = await clientPromise;
    const db = client.db();

    
    const {id} = req.params.id;
    const historialE = await db.collection("historial").findOne({id: id});
    if(historialE){
        return NextResponse.json({ historialE });
    }else{
        return NextResponse.json({ message: "No se encontro el historial" });
    }
}
/*export const GET = async(req, {params}) => {
    //Conexion a la base de datos
    const client = await clientPromise;
    const db = client.db();

    const { id } = req.params;
    const historial = await db.collection("historial").findOne({_id: id}).toArray();
    //console.log(historial);
    return NextResponse.json({ historial });
}*/
    
    
    /* const client = await clientPromise;
    const db = client.db();
    const {name} = req.params;
    const historial = await db.collection("historial").findOne({ name: name }); //name: data.name
    return NextResponse.json({ historial });*/
    /*await connectDB();
    const historial = await Historial.find({});
    return NextResponse.json({ historial });*/


//Insertar nuevo historial
export async function POST(request) {
    const client = await clientPromise;
    const data = await request.json();
    const db = client.db();
    const historialExists = await db.collection("historial").findOne({ name: data.name });
      
   if(!historialExists){
      const result = await db.collection("historial").insertOne(data);
      return NextResponse.json({ result, message: "Historial creado" });
    } else{
        const result = await db.collection("historial").updateOne({ name: data.name }, { $set: data });
        return NextResponse.json({ result, message: "Historial actualizado" });
        
    }
          //.updateOne({ email: user.email }, { $set: user });
    /*await connectDB();
    const data = await request.json();
    const historialExists = await Historial.findOne({ name: data.name });
    if (!historialExists) {
        const historial = await Historial.create(data);
        return NextResponse.json({ historial , message: "Usuario creado"});
    } else{
        
    }*/
}