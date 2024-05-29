import { NextResponse } from "next/server";
import clientPromise from "@/libs/mongodb"; // Ajusta la ruta según tu estructura de archivos
import { ObjectId } from "mongodb";

export async function GET(request) {
  const client = await clientPromise;
  const db = client.db();

  try {
    const url = new URL(request.url);
    const usuarioId = url.searchParams.get("usuarioId");

    if (!usuarioId) {
      return NextResponse.json({ error: "Usuario ID es requerido" }, { status: 400 });
    }

    const citas = await db
      .collection("citas")
      .find({ usuarioId: new ObjectId(usuarioId) })
      .toArray();

    return NextResponse.json(citas);
  } catch (error) {
    console.error("Error al obtener citas del usuario:", error);
    return NextResponse.json({ error: "Error al obtener citas del usuario" }, { status: 500 });
  }
}
