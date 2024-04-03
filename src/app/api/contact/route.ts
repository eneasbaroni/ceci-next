import {NextResponse, NextRequest } from "next/server"
import { sendMail } from "../../../middlewares/nodemailer" 

export async function GET(req: NextRequest) {
    return NextResponse.json({message: 'Hello, Next 13'})
}

export async function POST(req: NextRequest) {
    try {
        const data = await req.json()  
        await sendMail(data) 
        return NextResponse.json({message: 'Email enviado'})      
    } catch (error) {    
        return NextResponse.json({ error: 'Error al enviar el email' }, { status: 500 })
    }    
}