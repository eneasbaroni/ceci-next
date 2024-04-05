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
    </main>
  )
}

export default Main
