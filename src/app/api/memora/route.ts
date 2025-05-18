import { connectMongoDB } from "../../../lib/mongodb";
import Memora from "../DAO/models/memora.model";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const data = await req.json();
    console.log("🚀 ~ POST ~ data:", data);
    const { ci, nombre, apellido, email, codigo, link } = data;
    try {
        await connectMongoDB();

        const newMemora = new Memora({
            ci,
            nombre,
            apellido,
            email,
            codigo,
            link,
        });
        await newMemora.save();

        return NextResponse.json({ message: "Data Memora saved" });
    } catch (error: any) {
        if (error.code === 11000) {
            // 11000 es el código de error de MongoDB para clave duplicada
            console.error("Error al guardar los datos: Clave duplicada", error);
            return NextResponse.json(
                { message: "El CI o el Link ya existen" },
                { status: 409 }
            ); // Devuelve 409 Conflict
        }
        console.error("Error al guardar los datos:", error);
        return NextResponse.json({ message: error.message }, { status: 500 }); // Devuelve 500 Internal Server Error para otros errores
    }
}

export async function GET(req: NextRequest) {
    const ci = req.nextUrl.searchParams.get("ci") as string;
    if (!ci) return NextResponse.json({ message: "CI is required" });

    try {
        await connectMongoDB();
        const user = await Memora.findOne({ ci });
        return NextResponse.json(user);
    } catch (error: any) {
        return NextResponse.json({ message: error.message });
    }
}
