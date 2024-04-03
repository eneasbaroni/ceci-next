'use client'

import { useState } from "react"
import axios from "axios"
import Loader from "@//components/Loader"
import EmailModal from "@//components/EmailModal"
import { IBook } from "../[id]/books"

interface UserFormProps {
    book: IBook
}



const UserForm: React.FC<UserFormProps> = ({book}) => {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState('')
    
    const [payer, setPayer] = useState({
        name: '',
        phone: '',
        identification: '',
        address: '',
    })
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPayer({
            ...payer,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(payer);
        axios({
            method: 'post',
            url: `${baseURL}/api/purchase`,
            data: {payer, book}
        })     
        //TODO   
    }

  return (
    <>
        {loading && <Loader/>}
        <form action="" id="contactForm" onSubmit={handleSubmit}>
            
            <input type="text" id="name" name="name" placeholder="Nombre" required onChange={handleChange}/>
            <input type="text" id="phone" name="phone" placeholder="Numero de teléfono" required onChange={handleChange} />

            <input type="email" id="identification" name="identification" placeholder="Email" required onChange={handleChange}/>
            <input type="text" id="address" name="address" placeholder="Dirección" required onChange={handleChange} />

            <button type="submit"><p>Enviar</p></button>
        </form>
    </>
  )
}

export default UserForm