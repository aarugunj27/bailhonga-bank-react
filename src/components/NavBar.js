import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse
} from 'mdb-react-ui-kit';
import '../pages/static/css/style.css';
import Logo from '../pages/static/images/logo.jpg';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";

export default function NavBar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'><img className= 'logo' src={ Logo } alt="" /></MDBNavbarBrand>
        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink href='/'>Home</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href='/about'>About</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
                <MDBNavbarLink href='/services'>Services</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/contact'>Contact</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}