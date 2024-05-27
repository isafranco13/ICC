import { connectDB } from "@/libs/mongodb";
import Cita from "@/models/citas";
import { NextResponse } from "next/server";

// Obtener horas disponibles para una fecha específica
export async function GET(request) {
  await connectDB();
  const fecha = new Date(request.nextUrl.searchParams.get("fecha"));
  const citas = await Cita.find({ fecha });

  const horasReservadas = citas.map(cita => cita.hora);
  const horasDisponibles = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"].filter(
    hora => !horasReservadas.includes(hora)
  );

  return NextResponse.json(horasDisponibles);
}

// Agendar una cita
export async function POST(request) {
  await connectDB();
  const data = await request.json();
  const { fecha, hora, usuarioId, terapeutaId } = data;

  const citaExistente = await Cita.findOne({ fecha, hora, terapeutaId });

  if (citaExistente) {
    return NextResponse.json({ message: "Hora no disponible" });
  }

  const nuevaCita = new Cita(data);
  await nuevaCita.save();

  return NextResponse.json(nuevaCita);
}
