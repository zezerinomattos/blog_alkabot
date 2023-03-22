import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// MY IMPORTS
import './style.css';
import './responsive.css';
import './animation.css';

import imgDefault from '../../images/post-sem-imagem.jpg'

import Navbar from '../../components/Navbar';
import api from '../../services/api';
import Pagination from '../../components/Pagination';

function Home() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoadig] = useState(true);

  //PAGINAÇÃO
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  //CALCULOS PARA DESCOBRIR NUMERO DE PAGINAS QUE TEREI
  const pages = Math.ceil(posts.length / postsPerPage);

  //FILTRANDO LISTA DE ITENS DE 10 EM 10
  const startIndex = currentPage * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentItens = posts.slice(startIndex, endIndex);

  async function loadPosts(){
    await api.get('posts')
      .then((response) => {
        setPosts(response.data);

        setLoadig(false);
      })
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

            {
              // FAZENDO UMA CONDIÇÃO SE ESTIVER CARREGANDO MOSTRA UM SPINNER DO BOOTSTRAP
              loading ?
                <div class="spinner-border text-success my-5" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              :
              // SE DEU TUDO CERTO MOSTRA OS POSTS E ESCONDE O SPINNER
                <div className='posts-container'>
                  {
                    currentItens.map((post) => {
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
            }

            {/* CHAMANDO O COMPONENTE DE PAGINAÇÃO */}
            <Pagination setCurrentPage={setCurrentPage} pages={pages}/>
          </section>
        </main>
        
    </>
  );
}

export default Home;