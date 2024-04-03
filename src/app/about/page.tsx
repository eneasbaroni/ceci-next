import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cecilia Torres - Sobre mi",
    description: "Cecilia Torres-Tanatóloga",
    //icon
    icons: {
        icon: "./images/icon.svg",
        shortcut: "./images/icon.svg",
        apple: "./images/icon.svg",
    },
};

const About = () => {
  return (
    <main id="aboutContainer">
        <div id="about">
            <img src="/images/about/selfie-01.jpg" alt="Cecilia Torres" />
            <div className="aboutInfo">
                <p>
                    ¡Hola! Soy Cecilia Torres, Licenciada en Gestión Educativa
                    especializada en Tanatología y otros procesos relacionados con el
                    Duelo y la Muerte.<br />
                     Después de 12 años de experiencia en el ámbito educativo, me tocó
                    vivir la dura experiencia de perder a mi hijo Jerito. Lo que me
                    transformó muchísimo y me motivó a apostar en mi formación para
                    convertirla en una herramienta valiosa para el mundo.<br />
                     Mi propio proceso de duelo me brinda un conocimiento profundo y
                    empático del terreno, que me permite entender y acompañar las
                    vivencias de quienes transitan por esta difícil etapa de la vida.
                    Sumado a mi experiencia personal, mi formación en el tema se basa en
                    el amor, el compromiso y el respeto hacia cada persona que se acerca
                    a mí en busca de ayuda.<br />
                     Creo firmemente que existen tanto teorías como prácticas accesibles
                    a todas las personas, para ayudarles a transitar su duelo de manera
                    sana y libre. Esta información puede ser trabajada tanto en el
                    momento del duelo como en el proceso previo, para prepararnos de
                    manera más efectiva ante la pérdida de un ser querido.<br />
                     Mi intención es contribuir a una reconceptualización de la muerte y
                    del proceso del duelo desde el ámbito educativo, proponiendo
                    encuentros para darles espacio.
                </p>
            </div>
        </div>
    </main>
  )
}

export default About