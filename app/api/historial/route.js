//import { connectDB } from "@/libs/mongodb";
import clientPromise from "@/libs/mongodb";
import  Historial from "@/models/historial";
import { NextResponse } from "next/server";
import { ObjectId } from 'mongodb';


//Obtener todos los historiales
//Cambiar a obtener uno solo cuando se selecciona un historial
/*export async function GET(req) {
    //Conexion a la base de datos
    const client = await clientPromise;
    const db = client.db();
    //const usuario = "Jane Ortega";
    
    const name = req.params;
    console.log(name);

    //busqueda del historial
    const historial = await db.collection("historial").findOne({name});
    if(historial){
        return NextResponse.json({historial});
    }else{
        return NextResponse.json({ message: "No se encontro el historial"});
    }
    return NextResponse.json({ historial });
   
}*/
export const GET = async(req, {params}) => {
    //Conexion a la base de datos
    const client = await clientPromise;
    const db = client.db();

    //debe traer el nombre del usuario de la URL: 
    //http://localhost:3000/historial/Isabel%20Franco -> ejemplo
    //No sale ni madres, no se que hacer 
    console.log("req",req.params);
    const  name  = req.params;
    //console.log(name);
    const historial = await db.collection("historial").findOne({name: "Isabel Franco"});
    //console.log(historial);
    return NextResponse.json({ historial });
}
    
    
    /* const client = await clientPromise;
    const db = client.db();
    const {name} = req.params;
    const historial = await db.collection("historial").findOne({ name: name }); //name: data.name
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