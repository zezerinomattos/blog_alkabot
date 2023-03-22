import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// MY IMPORTS
import Home from '../pages/Home';
import PostDetalhe from '../pages/PostDetalhe';
import Alimentacao from '../pages/Alimentacao';
import Dieta from '../pages/Dieta';

export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/alimentacao' element={<Alimentacao />} />
                <Route path='/dieta' element={<Dieta />} />
                <Route path='/detalhespost/:id' element={<PostDetalhe />} />

                {/* QUALQUER OUTRA ROTA QUE NÃO EXISTA CAI EM HOME
                    EVITANDO A PÁGINA DE ERRO 401*/}
                <Route path='*' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}