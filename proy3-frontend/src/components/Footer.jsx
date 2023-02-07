import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Image from 'react-bootstrap/Image'

const Footer = () => {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-white md-2'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Conectate con Nosotros a Nuestras Redes Sociales:</span>
        </div>
        <div>
          <a href='https://es-la.facebook.com/' target={'_blank'} className='me-4 text-reset' rel="noreferrer">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='https://twitter.com/?lang=es' target={'_blank'} className='me-4 text-reset' rel="noreferrer">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='https://www.instagram.com/' target={'_blank'} className='me-4 text-reset' rel="noreferrer">
            <MDBIcon fab icon="instagram" />
          </a>
        </div>
      </section>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon className="me-3" />
              </h6>
              <Image src='https://i.postimg.cc/prr2V8VD/Logo-removebg-preview-1.png' fluid />
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>INGRESA</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Login
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Registrate
                </a>
              </p>
            </MDBCol>
            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Gral. Paz 700
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                saboreslatinos@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +54 9 3815655412
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='#/'>
          saboreslatinos.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;