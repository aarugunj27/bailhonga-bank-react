import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import '../pages/static/css/style.css';

function Footer() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section id='center' className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <h3>Bailhonga Bank</h3>
            </section>
            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Company</h6>
                            <p>
                                <Link to='/' className='nav-link'>
                                    Home
                                </Link>
                            </p>
                            <p>
                                <Link to='/about' className='nav-link'>
                                    About
                                </Link>
                            </p>
                            <p>
                                <Link to='/services' className='nav-link'>
                                    Services
                                </Link>
                            </p>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Support</h6>
                            <p>
                                <Link to='/contact' className='nav-link'>
                                    Contact
                                </Link>
                            </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                Belgaum, KA 590001, IN
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                info@example.com
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                            </p>
                            <p>
                                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

        </MDBFooter>
    );
}

export default Footer;