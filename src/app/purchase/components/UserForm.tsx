'use client'

import { useState } from "react"
import axios from "axios"
import Loader from "@//components/Loader"
import EmailModal from "@//components/EmailModal"
import { IBook } from "../[id]/books"
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'


interface UserFormProps {
    book: IBook
}

const UserForm: React.FC<UserFormProps> = ({book}) => {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState('')
    const [preferenceId, setPreferenceId] = useState(null)
    
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

    //MERCADO PAGO
    initMercadoPago(process.env.NEXT_PUBLIC_MP_PUBLIC_KEY!, {
        locale: 'es-AR',        
    })

    const createPreference = async () => {
        try {
            const response = await axios.post(`${baseURL}/api/checkout`, {payer, book})
            const {id} = response.data
            return id
        } catch (error) {
            console.log(error);
        }
    }

    //estilos para MP
    const customization = {
        visual: {
            buttonBackground: 'white',
            borderRadius: '6px',           
        },
        checkout: {
            theme: {
                elementsColor: '#c28484',
                headerColor: '#c28484'
            },
        },
    };


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true)
        const id = await createPreference()
        if (id) {
            setPreferenceId(id)
            setLoading(false)           
        } else {
            setLoading(false)
        }
        
    }

  return (
    <>
        {loading && <Loader/>}
        <form action="" id="contactForm" onSubmit={handleSubmit}>
            
            <input type="text" id="name" name="name" placeholder="Nombre" required onChange={handleChange}/>
            <input type="text" id="phone" name="phone" placeholder="Numero de teléfono" required onChange={handleChange} />

            <input type="email" id="identification" name="identification" placeholder="Email" required onChange={handleChange}/>
            <input type="text" id="address" name="address" placeholder="Dirección" required onChange={handleChange} />

            <button className="formBtn" type="submit"><p>Enviar</p></button>
            
        </form>
            {preferenceId && 
                <div className="mpBtnContainer">
                    <Wallet 
                        initialization={{ preferenceId: preferenceId, redirectMode: 'modal' }}
                        customization={customization as any}                       
                    />
                </div>
            }
    </>
  )
}

export default UserForm