import React from 'react'
import {Source_Sans_3} from "next/font/google";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cecilia Torres",
  description: "Cecilia Torres-Tanatóloga",
  //icon
  icons: {
    icon: "./images/icon.svg",
    shortcut: "./images/icon.svg",
    apple: "./images/icon.svg",
  },
};


const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
})

const Main = () => {
  return (
    
    <main id="home">
      <section id="welcome">
        <div className="arc"></div>
        {(<div className="arc-2" />)}
        <h1>EDUCACION PARA<br />EL DUELO</h1>
        <h3 className={sourceSans3.className}>
          El duelo no es opcional, la manera<br /> en la que elijas
          transitarlo sí lo es.
        </h3>

        <a href="#homeIndex">
          <img src="./images/index/arrow.svg" alt="arrow" />
        </a>
      </section>

      <section id="homeIndex">
        <div className="h1Container">
          <div className="circle"></div>
          <h1>
            <br />Aprende a transitar la muerte de un ser querido de
            manera consciente  <br /><br /><span>✹</span>
          </h1>
        </div>
        <p>
          El papel de la educación es acompañarte en este proceso. Llevándote por caminos que te permitan explorar y
          comprender tu personalidad y los significados de tus
          experiencias vivenciales. Fundamentalmente de aquellas que
          causen dolor.<br />
          Es importante saber que la educación para el duelo promueve la
          libertad de elección y la responsabilidad personal en la vida.
          Si bien, algunas personas que atraviesan un duelo pueden
          sentirse víctimas del dolor, este tipo de información ofrece una
          valorable gama de opciones y motivos para apostar por la vida y
          evitar complicar el proceso de duelo, fomentando el desarrollo
          integral de la persona, incluyendo su autorrealización y
          bienestar emocional. Comprendiendo que es mucho más que un
          moomento que le toca transitar.<br />
          En este espacio aprenderás, a través del uso de herramientas y
          recursos específicos, a duelar de manera consciente y responsable la trascendencia
          de un ser querido y encontrarás apoyo y guía para el camino del
          dolor que hoy te toca transitar.<br />
          El objetivo es ayudarte a desplegar tus potencialidades,
          comprendiendo tu historia de vida como estructura particular de
          tu persona en el mundo y brindándote las herramientas necesarias
          para desenvolverte libremente en sociedad.<br />
          Mi intención es contribuir a una reconceptualización de la
          muerte y del proceso del duelo desde el ámbito educativo,
          proponiendo encuentros para darles espacio.
        </p>
      </section>

      <section id="homeTalleres">
        <h3 className="talleresTitel">Reconocimientos</h3>
        {/* <h4>Reconocimientos obtenidos</h4> */}
        <div id="talleres">
          <div>
            <h4>Un espacio para sanar</h4>
            <p>
            Fue reconocido de Interés municipal en la ciudad de Villa María, el 13 de octubre del 2022, en el marco del lanzamiento de su tercera reimpresión.
            </p>
          </div>
          <div>
            <h5>Taller</h5>
            <h4>&quot;Murió mi pareja: ¿cómo sigue mi vida?&quot;</h4>
            <p>
              Fue Declarado de Interés municipal en Villa María el día 15 de junio del 2023.
            </p>
          </div>
          <div>
            <h4>Cecilia Torres</h4>
            <p>
            La ciudad de Villa Nueva dictó una resolución el día 20 de marzo del 2024 en la que reconocen a la escritora y tanatóloga Cecilia Torres por su acompañamiento a la comunidad brindándoles a las personas en duelo contención y apoyo a través de sus libros.
            </p>
          </div>
        </div>
      </section>


    </main>
  )
}

export default Main
