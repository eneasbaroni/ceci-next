import { Metadata } from "next";
import Form from "./components/Form";

export const metadata: Metadata = {
    title: "Cecilia Torres - Contacto",
    description: "Cecilia Torres-Tanatóloga",
    //icon
    icons: {
        icon: "./images/icon.svg",
        shortcut: "./images/icon.svg",
        apple: "./images/icon.svg",
    },
};

const Contact = () => { 

  return (
    <main id="contact" className="">
    <h1>Estoy para Acompañarte</h1> 
    <Form/>   
  </main>
  )
}

export default Contact