import {NextResponse, NextRequest } from "next/server"
import mercadopago from 'mercadopago';
import { MercadoPagoConfig, Payment } from 'mercadopago';
import {newPurchase, notification} from '../../../../middlewares/nodemailer'

const client = new MercadoPagoConfig({
    accessToken: process.env.MP_ACCESS_TOKEN!,
});

const payment = new Payment(client);

export async function POST(req: NextRequest, { params }: { params: { email: string } }) {
    const email = params.email
    const searchParams = req.nextUrl.searchParams;
    const topic = searchParams.get('topic');
    const id = searchParams.get('id');
    console.log("🚀 ~ POST ~ email:", email)
    console.log("🚀 ~ POST ~ topic:", topic)
    console.log("🚀 ~ POST ~ id:", id)

    if (topic != 'payment' || !id) {
        return new NextResponse(JSON.stringify({message: 'ok', status: 200}), {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        });
    }
  

    
    const data = await payment.get({
        id: id,
    })
    let status = data.status

    if (status != 'approved') {
        return new NextResponse(JSON.stringify({message: 'ok', status: 200}), {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        });
    }    
   
    await newPurchase(email, 'approved');
    await notification(email, id, 'approved');
   

    return new Response(JSON.stringify({message: 'Payment approved', status: 200}),{            
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },            
    });
    
   

    
    /* return NextResponse.json({message: 'ok', status: 200, headers: {
        'Access-Control-Allow-Origin': '*',
    }})  */
    
}

export async function GET(req: NextRequest) {
    return NextResponse.json({message: 'Hola desde Cecilia Torres'})
}

export async function PUT(req: NextRequest, { params }: { params: { email: string } }) {
    
    return NextResponse.json({message: 'Hola desde Cecilia Torres'})
}

export async function DELETE() {
    return NextResponse.json({message: 'Hola desde Cecilia Torres'})
}


