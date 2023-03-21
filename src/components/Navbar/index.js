import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// MY IMPORTS
import './style.css';
import './responsive.css';
import imgLogo from '../../images/nav-logo.png';

function Navbar() {

  const [actived, setActived] = useState(false);

  function ativaMenuHamburguer(){
    setActived(!actived);
  }

  return (
    <nav>
        <div className='img-logo'>
            <Link to='/'><img src={imgLogo} alt="Logotipo" /></Link>
        </div>

        <ul className={`menu-principal ${actived ? 'active-menu' : 'not-active-menu'}`}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/alimentacao'>Alimentação</Link></li>
            <li><Link to='/dieta'>Dietas</Link></li>
        </ul>

        <ul className='menu-humburguer'>
            {
                actived ? <li onClick={ativaMenuHamburguer} ><ion-icon name="close-outline"></ion-icon></li>
                : <li onClick={ativaMenuHamburguer} ><ion-icon name="menu-outline"></ion-icon></li>
            }
        </ul>
    </nav>
  );
}

export default Navbar;