import books from './books'
import { Metadata } from "next";
import UserForm from '../components/UserForm'

export const metadata: Metadata = {
    title: "Cecilia Torres - Adquirir libro",
    description: "Cecilia Torres-Tanatóloga",
    //icon
    icons: {
        icon: "../images/icon.svg",
        shortcut: "../images/icon.svg",
        apple: "../images/icon.svg",
    },
};


const Purchase = ({ params: { id } }: { params: { id: string } }) => {

  const book = books.find(book => book.id === id)

  return (

    <main id="purchase" className="">
      <div className="loaderContainer displayNone" id="loader">
        <div className="loader"></div>
      </div>
      <h1>Adquirir &quot;{book?.title}&quot;</h1> 
      <p>Para adquirir el libro, completa el siguiente formulario con tus datos para habilitar la pasarela de pago</p>
      <UserForm book={book!}/>   
    </main>

  )
}

export default Purchase