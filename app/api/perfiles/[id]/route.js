import clientPromise from "@/libs/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// Función para manejar la obtención de un perfil de terapeuta por ID
export async function GET(request, { params }) {
    try {
        const client = await clientPromise; // Conectar a la base de datos
        const db = client.db();

        // Convertir params.id a ObjectId
        const usuarioId = new ObjectId(params.id);
        console.log(`Fetching perfil for usuarioId: ${usuarioId}`); // Debug

        const perfil = await db.collection("perfilterapeutas").findOne({ usuarioId });
        
        if (!perfil) {
            return NextResponse.json({ message: 'Perfil no encontrado' }, { status: 404 });
        }
        return NextResponse.json(perfil); // Devolver el perfil en formato JSON
    } catch (error) {
        console.error('Error fetching perfil:', error); // Debug
        return NextResponse.json({ message: error.message }, { status: 500 }); // Manejar errores
    }
}

// Función para manejar la actualización de un perfil de terapeuta por ID
export async function PUT(request, { params }) {
    try {
        const client = await clientPromise; // Conectar a la base de datos
        const db = client.db();

        // Convertir params.id a ObjectId
        const usuarioId = new ObjectId(params.id);
        console.log(`Updating perfil for usuarioId: ${usuarioId}`); // Debug

        const data = await request.json(); // Obtener los datos del cuerpo de la solicitud

        // Eliminar el campo _id de los datos
        if (data._id) {
            delete data._id;
        }
        if (data.usuarioId) {
            delete data.usuarioId;
        }

        const perfil = await db.collection("perfilterapeutas").findOneAndUpdate(
            { usuarioId }, // Buscar el perfil por ID
            { $set: data }, // Actualizar con los nuevos datos
            { returnDocument: 'after' } // Devolver el perfil actualizado
        );

        if (!perfil.value) { // Ajuste para acceder al documento actualizado
            return NextResponse.json({ message: 'Perfil no encontrado' }, { status: 404 });
        }
        return NextResponse.json(perfil.value); // Devolver el perfil actualizado en formato JSON
    } catch (error) {
        console.error('Error updating perfil:', error); // Debug
        return NextResponse.json({ message: error.message }, { status: 500 }); // Manejar errores
    }
}