import React, { useState } from 'react'
import '../Styles/navbar.css'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
        <MDBNavbar className='nav' expand='lg' >
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'><span className='headName'>ARSHAQ AK</span></MDBNavbarBrand>
        <MDBNavbarToggler className='toggle text-light'
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNav(!openNav)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNav}>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' >
              <Link  className='text-light menu-item' to={'/'}>Home</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            {/* <MDBNavbarItem>
              <MDBNavbarLink><Link  className='text-light menu-item' to={'/services'}>Services</Link></MDBNavbarLink>
            </MDBNavbarItem> */}
            <MDBNavbarItem>
              <MDBNavbarLink><Link  className='text-light menu-item' to={'/contact'}>Contact Me</Link></MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </>
  )
}

export default Header
