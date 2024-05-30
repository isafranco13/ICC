import { NextResponse } from "next/server";
import clientPromise from "@/libs/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db();

  try {
    const citas = await db.collection("citas").find({}).toArray();
    return NextResponse.json(citas);
  } catch (error) {
    console.error("Error al obtener todas las citas:", error);
    return NextResponse.json({ error: "Error al obtener todas las citas" }, { status: 500 });
  }
}