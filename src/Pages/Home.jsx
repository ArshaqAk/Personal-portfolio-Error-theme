import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import '../Styles/home.css'
import AOS from 'aos';
import { MDBSpinner } from 'mdb-react-ui-kit';
import 'aos/dist/aos.css';
import profile_pic from '../assets/profile_pic.jpg'

const Home = () => {
  useEffect(()=>{
    AOS.init()
  },[])

  //spinner
  const [spinner,setSpinnr]=useState(true)

  setTimeout(()=>{
    setSpinnr(false)
  },1500)

  return (
    <>
  {
    spinner?
    <div className="spinner-container">
      <MDBSpinner role='status' className='spinner'>
      <span className='visually-hidden '>Loading...</span>
      </MDBSpinner>
    </div>
  : 
  <div className="container-fluid">
      <Header/>
    <div className="container">
      <div className="row first-row">
        <div className="col-lg-6 col-sm-12 d-flex flex-column justify-content-center align-items-center ">
          <h1>Hi, I Am Arshaq Ak </h1>
          <h2><span className='name'>Mern Stack </span>  Developer</h2>
          <div className="buttons">
            <a  href="../assets/ARSHAQ AK-RESUME" download><button className='btn '>Download Cv</button></a>
          </div>
          {/* <div className="social-icons-div">
          <i class="fa-brands fa-linkedin-in"></i>
          <i class="fa-brands fa-github"></i>
          <i class="fa-brands fa-x-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          </div> */}
        </div>
        <div className="col-lg-6 col-sm-12 right-div d-flex justify-content-center align-items-center">
            <img className='profile-img mt-2' src={profile_pic} alt="" />
        </div>
      </div>
      {/* second row */}
        <div className="row second-row">
          <div data-aos="fade-right" className="col-lg-3 col-sm-12 service-box">
              <h1>Designer</h1>
          </div>
          <div className="col-lg-3 col-sm-12 service-box " id='center'>
          <h1>Developer</h1>
          </div>
          <div data-aos="fade-left" className="col-lg-3 col-sm-12 service-box">
          <h1>Trainer</h1>
          </div>
        </div>
        {/* third row */}
        <div className="row mt-5 third-row">
          {/* <h1 className='text-center'>SKILL</h1> */}
          <div className="col-lg-6 col-sm-12 p-2">
              <div className="coding-skill" >
                <div className="rangeBox-container">
                  <div className="title-div">
                    <h6>React Js</h6>
                    <h6>90%</h6>
                  </div>
                  <div className="range-container">
                      <div className="html-range" data-aos="fade-right"></div>
                  </div>
                </div>

                <div className="rangeBox-container">
                  <div className="title-div">
                    <h6>Express Js</h6>
                    <h6>85%</h6>
                  </div>
                  <div className="range-container">
                      <div className="css-range" data-aos="fade-right"></div>
                  </div>
                </div>
                
                <div className="rangeBox-container">
                  <div className="title-div">
                    <h6>Mongo DB</h6>
                    <h6>74%</h6>
                  </div>
                  <div className="range-container">
                      <div className="js-range" data-aos="fade-right"></div>
                  </div>
                </div>
              </div>
          </div>
          <div className="col-lg-6 col-sm-12 p-2">
          <div className="coding-skill">
                <div className="rangeBox-container">
                  <div className="title-div">
                    <h6>Web Designing</h6>
                    <h6>80%</h6>
                  </div>
                  <div className="range-container">
                      <div className="design-range" data-aos="fade-right"></div>
                  </div>
                </div>

                <div className="rangeBox-container">
                  <div className="title-div">
                    <h6>Web Development</h6>
                    <h6>90%</h6>
                  </div>
                  <div className="range-container">
                      <div className="development-range" data-aos="fade-right"></div>
                  </div>
                </div>
                
                <div className="rangeBox-container">
                  <div className="title-div">
                    <h6>SEO</h6>
                    <h6>76%</h6>
                  </div>
                  <div className="range-container">
                      <div className="seo-range" data-aos="fade-right"></div>
                  </div>
                </div>
              </div>

          </div>
        </div>
    </div>
  </div>
  }
  
    </>
  )
}

export default Home
