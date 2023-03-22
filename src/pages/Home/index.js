import React from 'react';
import { Link } from 'react-router-dom';

// MY IMPORTS
import './style.css';
import './responsive.css';
import Navbar from '../../components/Navbar';

function Home() {
  return (
    <>
        <header>
          <Navbar />
          <div class="chamada">
              <h1>Mundo Verde</h1>
              <h2>Receitas naturais e deliciosas do Mundo Verde!</h2>
              <Link to="#" target="_blank">SAIBA MAIS</Link>
          </div>
        </header>

        <main>
          
        </main>
        
    </>
  );
}

export default Home;