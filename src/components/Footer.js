import './Footer.css';
import * as Links from '../GlobalLinks';
import discord from '../images/discord.png';
import twitter from '../images/twitter.png';

export const Footer = () => {
  return (
    <footer className="footer">
      {/*
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
            */}
      
      <div className="div-separator"></div>
            <div className="div-container">
                <div className="div-footer">
                        <center>
                            <b><i>
                                <p className="text-claro1 tam-contacto">¡Contáctanos en nuestras redes sociales!</p>
                            </i>
                            </b>
                            <a href={Links.contactoDiscord} target="_blank" >
                                <img className="icon-socials icon-discord" src={discord} />
                            </a>
                            <a href={Links.contactoTwitter} target="_blank" >
                                <img className="icon-socials icon-twitter" src={twitter} />
                            </a>
                            <p className="text-claro1 tam4">Mty, Nuevo León, México | Baro.Capital | Email: info@baro.capital</p>
                            <p className="text-claro1 tam4">Copyright © 2022 Baro Capital</p>
                        </center>
                </div>
            </div>


    </footer>
  )
}
