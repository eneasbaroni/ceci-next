import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Cecilia Torres - Checkout",
    description: "Cecilia Torres-Tanatóloga",
    //icon
    icons: {
        icon: "../images/icon.svg",
        shortcut: "../images/icon.svg",
        apple: "../images/icon.svg",
    },
};

const Checkout = ({ params: { status } }: { params: { status: string } }) => {
   
  return (
    <>
        {status == 'success' &&
            <main id="checkout" className="">
                <h1>Tu pago fue exitoso</h1> 
                <p>Pronto te contactaremos para coordinar tu entrega</p>
                <Link href='/'>Volver al inicio</Link>           
            </main>
        }

        {status == 'failure' &&
            <main id="checkout" className="">
                <h1>Tu pago fue rechazado</h1> 
                <p>Vuelvelo a intentarlo mas tarde</p>
                <p>O bien, ponte en contacto con nosotros <Link className="contactLink" href='/contact'>aquí</Link></p>
                <Link href='/'>Volver al inicio</Link>           
            </main>
        }

        {status == 'pending' &&
            <main id="checkout" className="">
                <h1>Tu pago esta pendiente</h1> 
                <p>Pronto te contactaremos cuando se apruebe el pago</p>
                <Link href='/'>Volver al inicio</Link>           
            </main>
        }
    </>
  )
}

export default Checkout