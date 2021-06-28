/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import fotoPerfil from '../../assets/fotoPerfil.jpg';
import linkedin from '../../assets/redesSociais/linkedin.svg';
import gitHub from '../../assets/redesSociais/gitHub.png';
import whatsApp from '../../assets/redesSociais/whatsapp.svg';
import instagram from '../../assets/redesSociais/instagram.svg';

import { SectionHeader } from './styled';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <SectionHeader>
      <div className="fotoPerfil">
        <img src={fotoPerfil} alt="" />
      </div>
      <h1>Leonardo Pilatti Dal Puppo</h1>
      <div className="redesSociais">
        <ul>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/leonardo-pilatti/"
            >
              <img src={linkedin} alt="" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/LeonardoPilatti">
              <img src={gitHub} alt="" />
            </a>
          </li>
          <li>
            <a target="_blank" href="">
              <img src={whatsApp} alt="" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.instagram.com/leonardo_pilatti/"
            >
              <img src={instagram} alt="" />
            </a>
          </li>
        </ul>
      </div>
      <nav className="navegacao">
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/Sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/Habilidades">Habilidades</Link>
          </li>
          <li>
            <Link to="/Portfolio">Portfólio</Link>
          </li>
          <li>
            <Link to="/Contato">Contato</Link>
          </li>
        </ul>
      </nav>
      <form className="darkWhite">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </form>
    </SectionHeader>
  );
};
