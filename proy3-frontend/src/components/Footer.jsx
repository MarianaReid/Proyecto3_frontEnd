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
        <div className=''>
          <a href='https://es-la.facebook.com/' target={'_blank'} className='m-3 text-reset' rel="noreferrer">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='https://twitter.com/?lang=es' target={'_blank'} className='m-3 text-reset' rel="noreferrer">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='https://www.instagram.com/' target={'_blank'} className='m-3 text-reset' rel="noreferrer">
            <MDBIcon fab icon="instagram" />
          </a>
        </div>
      </section>
      <section className='m-auto'>
        <MDBContainer className='text-center text-md-start'>
          <MDBRow className=''>
            <MDBCol md="4" lg="4" xl="4" className='mx-auto'>
              <Image src='https://i.postimg.cc/RVy1BMwD/Logo-removebg-preview.png' fluid />
            </MDBCol>
            <MDBCol md="4" lg="4" xl="4" className='m-auto'>
              <h6 className='text-uppercase fw-bold'>Contacto</h6>
              <hr />
              <p>
                <MDBIcon icon="home" className="me-3" />Gral. Paz 700
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />saboreslatinos@mail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />+54 9 381 5655 412
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <div className='text-center p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <div className='text-reset fw-bold'>
          saboreslatinos.com
        </div>
      </div>
    </MDBFooter>
  );
}

export default Footer;