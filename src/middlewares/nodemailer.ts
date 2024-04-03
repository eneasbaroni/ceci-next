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
        text: "Hello coders",    
        html: `<h1 style='color: black'>Nuevo Mensaje de Contacto</h1><br><p>Nombre: ${data.nombre}</p><br><p>Apellido: ${data.apellido}</p><br><p>Email: ${data.correo}</p><br><p>Mensaje: ${data.mensaje}</p>`,
    };

    try {
        await transporter.sendMail(emailContent);     
    } catch (error) {
        throw error
    }

}

export { sendMail }
  

  

