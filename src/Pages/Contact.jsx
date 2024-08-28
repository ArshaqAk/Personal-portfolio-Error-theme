import React from 'react'
import Header from '../Components/Header'
import '../Styles/contact.css'
const Contact = () => {
  return (
    <>
    <Header/>
    <div className='container'>
      <div className="row">
        <div className="col-12 d-flex  justify-content-center">
            <h1 className='contact-text'><span>CONTACT</span> ME</h1>
        </div>
      </div>
      <div className="row d-flex flex-column align-items-center">
        <button className='btn btn-dark w-25'>Email</button>
        <button className='btn btn-dark w-25'>Whatsapp</button>
        <button className='btn btn-dark w-25'>Linked in</button>
        <button className='btn btn-dark w-25'>Instegram</button>
      </div>
    </div>
    </>
  )
}

export default Contact
