import React from 'react'

interface Props {
    message: string;
    foo: () => void;
  }

const EmailModal: React.FC<Props> = ({message, foo}) => {
  return (
    <div id='emailModal'>
        <div className="emailModal">
            <p>{message}</p>
            <button onClick={foo}>aceptar</button>
        </div>
    </div>
  )
}

export default EmailModal