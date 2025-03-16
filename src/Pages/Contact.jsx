import Header from '../Components/Header'
import '../Styles/contact.css'
const Contact = () => {
  return (
    <>
    <Header/>
    <div className='container'>
      <div className="row">
        <div className="col-12 d-flex  justify-content-center text-center">
            <h1 className='contact-text'><span>CONTACT</span> ME</h1>
        </div>
      </div>
      <div className="row">
        <div className=' col-12 d-flex flex-column align-items-center'>
        <a target='blank' href="mailto:arshaqakard@gmail.com"><button className='btn btn-dark'>Email</button></a>
        <a target='blank' href="https://www.linkedin.com/in/arshaq-ak-920183284/"><button className='btn btn-dark'>Linked in</button></a>
        <a target='blank' href="https://www.instagram.com/arshaq_arq/"><button className='btn btn-dark'>Instagram</button></a>
        <a target='blank' href="https://api.whatsapp.com/send?phone=9745395629"><button className='btn btn-dark'>Whatsapp</button></a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact
