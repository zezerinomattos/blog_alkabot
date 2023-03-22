import React, { useState } from 'react';

// MY IMPORTS
import './style.css';
import './responsive.css';
import imgLogo from '../../images/nav-logo.png';

export default function Footer(){

    const [email, setEmail] = useState('');

    return(
        <>
            <footer>
                <div className='footer-logo'>
                    <img src={imgLogo} alt="Logotipo" />
                </div>
                <div className='footer-redes-sociais'>
                    <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
                    <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
                    <li><a href="#"><ion-icon name="logo-youtube"></ion-icon></a></li>
                </div>

                <h3>CADASTRE-SE E RECEBA DICAS, RECEITAS E OFERTAS!</h3>
                <form className='assinar'>
                    <input className='form-email' type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Seu endereço de e-mail'/>
                    <button className='btn-email mx-2'>Assinar</button>
                </form>

                <span>Copyright © Zezerino Mattos. Todos diretos reservados.</span>
            </footer>
        </>
    );
}