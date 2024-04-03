'use client'

import { useState } from "react"
import axios from "axios"
import Loader from "@//components/Loader"
import EmailModal from "@//components/EmailModal"

const Form = () => {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState('')
    
    const [user, setUser] = useState ({
        nombre: '',
        apellido: '',
        correo: '',
        mensaje: '',
    })
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const resetForm = () => {
        setUser({
            nombre: '',
            apellido: '',
            correo: '',
            mensaje: '',
        })

        const form = document.getElementById('contactForm') as HTMLFormElement
        form.reset()
    }

    const closeModal = () => {
        setModal('')
    }
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        setLoading(true)        
        
        axios.post(`${baseURL}/api/contact`, user)
        .then((response) => {
        if (response.status === 200) {
            setLoading(false)
            resetForm()
            setModal('Email enviado')
        } else {
            setLoading(false)
            resetForm()
            setModal('Error al enviar el email')
        }
        })
        .catch((error) => {
            console.log(error);
            setLoading(false)
            resetForm()
            alert('Error al enviar el email')
        });
        
    }

  return (
    <>
        {loading && <Loader/>}
        {modal && <EmailModal message={modal} foo={closeModal}/>}
        <form action="" id="contactForm" onSubmit={handleSubmit}>
            <input type="text" id="nombre" name="nombre" placeholder="Nombre" required onChange={handleChange}/>
            <input type="text" id="apellido" name="apellido" placeholder="Apellido" required onChange={handleChange} />

            <input type="email" id="correo" name="correo" placeholder="Email" required onChange={handleChange}/>
            <input type="text" id="mensaje" name="mensaje" placeholder="Mensaje" required onChange={handleChange} />

            <button type="submit"><p>Enviar</p></button>
        </form>
    </>
  )
}

export default Form