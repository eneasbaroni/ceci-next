import { connectMongoDB } from "../../../../lib/mongodb";
import Memora from "../../DAO/models/memora.model";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
    req: NextRequest,
    { params }: { params: { code: string } }
) {
    const { code } = params;

    const ci = code;

    try {
        await connectMongoDB();
        const data = await Memora.findOne({ ci });
        /* if (!data) {
            return NextResponse.json({ message: "No se encontró el código" });
        } */

        return NextResponse.json(data);
    } catch (error: any) {
        return NextResponse.json({ message: error.message });
    }
}
