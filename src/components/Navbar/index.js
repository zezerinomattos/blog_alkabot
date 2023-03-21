import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// MY IMPORTS
import './style.css';
import imgLogo from '../../images/nav-logo.png';

function Navbar() {
  return (
    <nav>
        <div className='img-logo'>
            <img src={imgLogo} alt="Logotipo" />
        </div>

        <ul className='menu-principal'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/alimentacao'>Alimentação</Link></li>
            <li><Link to='/dieta'>Dietas</Link></li>
        </ul>
    </nav>
  );
}

export default Navbar;