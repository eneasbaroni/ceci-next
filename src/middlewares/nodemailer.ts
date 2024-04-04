import { createTransport } from "nodemailer"

const EMAIL = process.env.EMAIL
const MAIL_PASS = process.env.MAILPASS
const EMAIL_TO_SEND = process.env.EMAIL_TO_SEND

const transporter = createTransport({
    service: 'gmail',  
    port: 587,
    auth: {
        user: EMAIL,
        pass: MAIL_PASS,
    }
});

/* funcion para enviar el mail */

interface newEmailData {
    nombre: string,
    apellido: string,
    correo: string,
    mensaje: string
}

const sendMail = async (data: newEmailData) => {  

    const emailContent = {
        from: "Cecilia Torres",
        to: EMAIL_TO_SEND,
        subject: "Nuevo Mensaje de Contacto",
        text: "Cecilia Torres",    
        html: `<h1 style='color: black'>Nuevo Mensaje de Contacto</h1><br><p>Nombre: ${data.nombre}</p><br><p>Apellido: ${data.apellido}</p><br><p>Email: ${data.correo}</p><br><p>Mensaje: ${data.mensaje}</p>`,
    };

    try {
        await transporter.sendMail(emailContent);     
    } catch (error) {
        throw error
    }

}

const newPurchase = async (userMail: string, status: string) => {
    console.log("🚀 ~ newPurchase ~ userMail:", userMail)
    let notification: string
    notification = 'Tu compra ha sido aprobada, nos pondremos en contacto para coordinar la entrega de los productos'
    

    /* if (status == 'approved') {
        notification = 'Tu pago ha sido aprobado, nos pondremos en contacto para coordinar la entrega de los productos'
    }
    if (status == 'rejected') {
        notification = 'Tu pago ha sido rechazado, por favor intenta nuevamente'
    }
    if (status == 'pending') {
        notification = 'Tu pago se encuentra pendiente, nos pondremos en contacto para coordinar la entrega de los productos'
    }
    if (status == 'in_process') {
        notification = 'Tu pago se encuentra en proceso, nos pondremos en contacto para coordinar la entrega de los productos'
    } */

    const emailContent = {
        from: "Cecilia Torres",
        to: userMail,
        subject: "Nueva Compra Realizada",
        text: "Cecilia Torres",    
        html: `<h3 style='color: black'>${notification}</h3>`, 
    }; 

    try {
        await transporter.sendMail(emailContent);
    } catch (error) {
        console.log('erro de nodemailer', error);
    }

}

const notification = async (userMail: string, paymentId: string, status: string) => {
    const email = userMail;
       

    const emailContent = {
    from: "Cecilia Torres",
    to: EMAIL_TO_SEND,
    subject: `Nuevo Pedido de: ${email}`,
    text: "Cecilia Torres",
    html: `
    <h3 style='color: black'>Nuevo Pedido de: ${email}</h3>    
    <p>Email: ${email}</p>     
    <p>Id del pago es: ${paymentId}</p> 
    <p>El estado del pago es: ${status}</p> 
    `,
    };

    try {
        await transporter.sendMail(emailContent);
    } catch (error) {
        console.log('erro de nodemailer', error);
    }
}

export { sendMail, newPurchase, notification }
  

  

