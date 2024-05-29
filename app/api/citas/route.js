import clientPromise from "@/libs/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import Cita from "@/models/citas";

// Obtener horas disponibles para una fecha específica
export async function GET(request) {
  const client = await clientPromise;
  const db = client.db();
  const fecha = new Date(request.nextUrl.searchParams.get("fecha"));
  
  try {
    const citas = await db.collection("citas").find({ fecha }).toArray();

    const horasReservadas = citas.map(cita => cita.hora);
    const horasDisponibles = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"].filter(
      hora => !horasReservadas.includes(hora)
    );

    return NextResponse.json(horasDisponibles);
  } catch (error) {
    return NextResponse.error(error);
  }
}

// Agendar una cita
export async function POST(request) {
  const client = await clientPromise;
  const db = client.db();
  
  try {
    const { fecha, hora, nombre, apellidoPaterno, apellidoMaterno, celular, usuarioId, terapeutaId } = await request.json();
  
    const data = new Cita({
      fecha: new Date(fecha), // Asegúrate de que la fecha se guarde correctamente como Date
      hora,
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      celular,
      terapeutaId: new ObjectId(terapeutaId),
    });

    if (usuarioId) {
      data.usuarioId = new ObjectId(usuarioId);
    }

    await db.collection("citas").insertOne(data);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.error(error);
  }
}
