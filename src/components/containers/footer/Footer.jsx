/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { IoLogoWhatsapp, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import logo from '../../../img/logo-edr.svg';
import './footer.css';

function Footer()
{
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-panel-left">
        <span>
          Copyright &copy; 2022 Eduardo Rios, México.
        </span>
      </div>

      <div>
        <div className="social-media">
          <IconContext.Provider value={{ size: '2.5vw' }}>
            <a
              href="https://api.whatsapp.com/send?phone=2211805708"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoWhatsapp style={{ color: '#4BCA5A' }} />
            </a>
            <a
              href="https://github.com/edRiosJ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub style={{ color: '#000000' }} />
            </a>
            <a
              href="https://www.linkedin.com/in/eduardo-rios-jaen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoLinkedin style={{ color: '#00669A' }} />
            </a>
          </IconContext.Provider>
        </div>
      </div>

      <div className="footer-panel-right">
        <img src={logo} alt="EDR" loading="lazy" />
      </div>
    </footer>
  );
}

export default Footer;
