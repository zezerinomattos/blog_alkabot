import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


// MY IMPORTS
import './style.css';

import Navbar from '../../components/Navbar';
import api from '../../services/api';
import Pagination from '../../components/Pagination';
import Footer from '../../components/Footer';

function PostDetalhe() {

  const [comment, setComment] = useState([]);
  const [loading, setLoadig] = useState(true);

  const navigate = useNavigate();

  const { id } = useParams();

  //PAGINAÇÃO
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  //CALCULOS PARA DESCOBRIR NUMERO DE PAGINAS QUE TEREI
  const pages = Math.ceil(comment.length / postsPerPage);

  //FILTRANDO LISTA DE ITENS DE 10 EM 10
  const startIndex = currentPage * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentItens = comment.slice(startIndex, endIndex);


  //FUNÇÃO PARA CARREGAR OS COMENTARIOS
  async function loadComment(){
    await api.get(`posts/${id}/comments`)
    .then((response) => {
      setComment(response.data);
  
      setLoadig(false);
    })
    .catch(() => {
        navigate('/', {replace: true});
        return;
    });
  }

  useEffect(() => {
    loadComment()

  }, []);

  return (
    <>
      <Navbar />
        <main>
          <section className='detalhes'>
            {
              // FAZENDO UMA CONDIÇÃO SE ESTIVER CARREGANDO MOSTRA UM SPINNER DO BOOTSTRAP
              loading ?
                <div class="spinner-border text-success my-5" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              :
              // SE DEU TUDO CERTO MOSTRA OSCOMENTARIOS ESCONDENDO O SPINNER
              <div className='comentarios'>
                {
                  comment.map((item) => {
                    return(
                      <article key={item.id}>
                        <h4>{item.name}</h4>
                        <span>{item.email}</span>
                        <p>{item.body}</p>
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
      <Footer />
    </>
  );
}

export default PostDetalhe;