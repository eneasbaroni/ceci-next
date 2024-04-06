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

        <div className="infoContainer">
            <img src="/images/uepr/magia.png" className="magiaSM" alt="book" />
            <div className="textInfo">
                <h1>LA MAGIA DEL AMOR</h1>
                <h3>
                    Un libro diferente.
                </h3>
                <p>
                    Los que conocen Un Espacio Para Sanar, saben que es un libro completamente de lectura, maravilloso, pero solo para leer, La Magia del Amor es un libro diferente, no sólo es de lectura, porque obviamente incluye escritos, pero es diferente porque nos permite plasmar el tiempo de duelar. Raro, ¿no?
                </p>
                <br />
                <p>
                    Es un libro novedoso porque:
                    <br />• Porque viene a acompañarte en ese momento en que ni vos mismo queres estar: el momento del duelo.
                    <br />• Viene a caminar con vos el dolor, como siempre digo: “Desde el amor”.
                    <br />• Viene a hablar del duelo.
                    <br />• viene a ofrecerte <span>más de 50 dinámicas para trabajar tu duelo</span> esto resaltado de alguna manera.
                </p>                
                <br />
                <p>
                Este libro es novedoso también porque es un libro didáctico sobre el duelo… el duelo es un proceso activo de adaptación a un nuevo mundo sin mi ser querido, nuevo porque es sin ellos, bien, bueno, este libro es novedoso porque te viene a acompañar en tu duelo con variadas actividades para que trabajes tu duelo de una manera consciente, amorosa y siempre dándole valor a esta nueva vida sin mí ser querido, que lejos de ser una vida sin vida, ha de ser una vida vivida plenamente y a consciencia, porque este ser querido me enseñó muchas cosas, ahora es hora de ponerlo en práctica.
                </p>
                <br/>
                <p>
                Este libro no es una receta para duelar, sino, una de las tantas opciones para transitar el duelo desde los valores y fundamentalmente desde el amor. 
                <br/>Entonces ¿Qué vendría a ser La Magia del Amor?
                <br/>Este libro es un registro del duelo: El tiempo de duelo, por más doloroso y visceral no deja de ser importante y trascendental en nuestras vidas, ¿porque no registrarlo?
                <br/>Este libro es un espacio, quizá el más doloroso, pero no menos importante para registrar y transformar el dolor. En este espacio podremos registrar emociones, sentires, recuerdos, sueños, señales, lo mágico.
                <br/>Este libro es un encuentro: pero esta vez con vos mism@. Es un cuaderno para plasmar el duelo, el proceso del duelo y eso lo hace sumamente novedoso, ya que rompe con la cultura evitativa del duelo y el dolor y rompe con el morbo que produjo la palabra muerte durante mucho tiempo.
                </p>
                <br/>
                <p><span>¿Para qué registrar el proceso de duelo?</span></p>
                <p>• Primero: Como acto de liberación: abrirme al sentir, reconocer y no solo reconocer sino, validar aquello que siento. Basta de pedir perdón por llorar, basta de exigirme ser fuerte para los demás, basta de ponerme en el papel de esconder mi sentir.
                <br/>• Segundo: Para vivir Conscientes este proceso: ¿Qué es vivir conscientemente? No es solo mirar o ver el proceso, sino también accionar sobre el mismo. Elegir, decidir.
                <br/>• Tercero responsabilizarme de este tiempo de duelar: registrar todo el sentir, permite observarme, ver avances en el proceso y poder tener libertad de elecciones y vivir responsablemente el duelo.
                <br/>• Cuarto como acto revelador ¿En qué momento aprendimos que la vida terrenal no tenía instancias de dolor?
                <br/>• Quinto: para reivindicar el dolor como posibilidad, no de existencia, sino, de crecimiento personal y de consciencia. Pero no desde el ¿“Vamos a sufrir? ¡Que está bueno! Si no, de reconocer que esta vida lo incluye y reconocer que en muchos momentos de la vida uno se va encontrar con este sentir. Y ¿Saben qué? Lo único que hemos logrado durante años evitándolo es que cuando llega, no sabemos qué hacer, no sabemos lo que está bien, no sabemos reconocer aquello que nos pueda perjudicar en duelo.
                </p>
            </div>
            <img src="/images/uepr/magia.png" className="magiaGD" alt="book" />
        </div>
        {/* <Link href="/purchase/ctb001">Adquirir Libro</Link> */}
        <a href="" target="_blank" rel="noreferrer">Adquirir Libro</a>
    </main>
  )
}

export default Books