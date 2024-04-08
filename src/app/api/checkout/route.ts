import {NextResponse, NextRequest } from "next/server"
import { MercadoPagoConfig, Preference } from 'mercadopago';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const client = new MercadoPagoConfig({
    accessToken: process.env.MP_ACCESS_TOKEN!,
});

export async function POST(req: NextRequest) {
    const {payer, book} = await req.json()
    

    try {
        const body = {
            items: [
                {
                    id: book.id,
                    title: book.title,
                    unit_price: book.price,
                    quantity: 1,
                    currency_id: "ARS",
                }
            ],
            payer: {
                name: payer.name,
                email: payer.identification,
                phone: {
                    number: payer.phone
                },
                address: {
                    street_name: payer.address
                }
            },
            back_urls: {
                success: `${BASE_URL}/checkout/success`,
                failure: `${BASE_URL}/checkout/failure`,
                pending: `${BASE_URL}/checkout/pending`,
            },
            auto_return: "approved",
            //notification_url: `https://s2d59brn-3000.brs.devtunnels.ms/api/notification/${payer.identification}?phone=${payer.phone}`
            notification_url: `${BASE_URL}/api/notification/${payer.identification}?phone=${payer.phone}`
            //notification_url: `https://dart-server-hd0v.onrender.com/notifications/${payer.identification}/125`
        }             

        const preference = new Preference(client)
        const result = await preference.create({body})

        return NextResponse.json({id: result.id})
    } catch (error) {
        console.log(error)
    }

}