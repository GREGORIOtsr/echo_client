import React from "react";
import { Link } from "react-router-dom";
import Nav from './Nav';
import logoURL from '../../assets/icon.png';

const Header = () => {
  return (
    <header>
      <section id="header-container">
        <Nav />
        <Link to={'/'}><img src={logoURL} alt="Echo logo" /></Link>
      </section>
    </header>
  );
};

export default Header;
