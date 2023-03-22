import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// MY IMPORTS
import './style.css';
import './responsive.css';
import './animation.css';

import imgDefault from '../../images/post-sem-imagem.jpg'

import Navbar from '../../components/Navbar';
import api from '../../services/api';

function Home() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoadig] = useState(true);

  async function loadPosts(){
    const response = await api.get('posts')

    // console.log(response.data.slice(0, 10))
    setPosts(response.data.slice(0, 10));
    setLoadig(false);
  }

  useEffect(() => {
    loadPosts();
  }, []);

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
          <section className='posts'>
            <h1>Transforme sua saúde e sabor agora!</h1>
          
            <div className='posts-container'>
              {
                posts.map((post) => {
                  return(
                    <article key={post.id}>
                        <div className='img-post'>
                          <img src={post.img ? post.img : imgDefault} alt="Ilustração do post"/>
                        </div>
                        <h3>{post.title}</h3>
                        <span>{post.body}</span>
                    </article>
                  )
                })
              }
            </div>
          </section>
        </main>
        
    </>
  );
}

export default Home;