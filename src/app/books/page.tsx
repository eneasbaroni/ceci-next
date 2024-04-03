import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Cecilia Torres - Mis libros",
    description: "Cecilia Torres-Tanatóloga",
    //icon
    icons: {
        icon: "./images/icon.svg",
        shortcut: "./images/icon.svg",
        apple: "./images/icon.svg",
    },
};

const Books = () => {
  return (
    <main id="espacio">
        <div className="infoContainer">
            <img src="/images/uepr/book.jpeg" alt="book" />

            <div className="textInfo">
                <h1>UN ESPACIO PARA SANAR</h1>
                <h3>
                    Las personas no podemos elegir si estar en duelo o no, pero
                    sí hay una pequeña libertad y está en la forma en la que
                    elijamos transitar este dolor.
                </h3>
                <p>
                    En este libro cuento la experiencia más dura que le puede
                    tocar a un papá y a una mamá.
                </p>
                <p>
                    Si bien es un libro que aborda el dolor, la idea es
                    mostrarte la herramienta del amor, el amor que puede
                    salvarte. Mostrandote que podemos ir del dolor emocional al
                    bienestar.<br />Es un libro de amor que ha sido luz para
                    muchos en su primera edición.
                </p>
                <br />
                <p>
                    Este libro puede servirte si:
                    <br />• Estás transitando un Duelo por la pérdida física de
                    un ser querido.
                    <br />• Si tenés un familiar o amigo que está transitando un
                    Duelo.
                    <br />• Si sos de aquellos que aman valorar la vida.
                    <br />• Si crees que la respuesta<span>es siempre el amor</span>
                </p>
                <br />
                <p>
                    En el mismo te cuento:
                    <br />• El hecho que cambió mi vida.
                    <br />• El proceso de la muerte.
                    <br />• El duelo, para los que lo transitan y para aquellos
                    que acompañan.
                    <br />• Herramientas que pueden servirte para aprender de
                    las adversidades.
                    <br />• Autoconocimiento
                    <br />• <span>Amor y Espiritualidad</span>
                </p>
            </div>
        </div>
        {/* <Link href="/purchase/ctb001">Adquirir Libro</Link> */}
        <a href="https://librelibro.com.ar/productos/un-espacio-para-sanar/" target="_blank" rel="noreferrer">Adquirir Libro</a>
    </main>
  )
}

export default Books