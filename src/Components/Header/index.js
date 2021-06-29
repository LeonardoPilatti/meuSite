/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import MenuItem from '../MenuItem';

import fotoPerfil from '../../assets/fotoPerfil.jpg';
import linkedin from '../../assets/redesSociais/linkedin.svg';
import gitHub from '../../assets/redesSociais/gitHub.png';
import whatsApp from '../../assets/redesSociais/whatsapp.svg';
import instagram from '../../assets/redesSociais/instagram.svg';

import { SectionHeader } from './styled';

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
            <MenuItem link="/">Início</MenuItem>
          </li>
          <li>
            <MenuItem link="/Sobre">Sobre</MenuItem>
          </li>
          <li>
            <MenuItem link="/Habilidades">Habilidades</MenuItem>
          </li>
          <li>
            <MenuItem link="/Portfolio">Portfólio</MenuItem>
          </li>
          <li>
            <MenuItem link="/Contato">Contato</MenuItem>
          </li>
        </ul>
      </nav>
      <div className="darkWhite">
        <p className="Plight">Light</p>
        <form>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </form>
        <p className="Pdark">Dark</p>
      </div>
    </SectionHeader>
  );
};
