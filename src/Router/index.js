import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// MY IMPORTS
import Home from '../pages/Home';

export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />

                {/* QUALQUER OUTRA ROTA QUE NÃO EXISTA CAI EM HOME
                    EVITANDO A PÁGINA DE ERRO 401*/}
                <Route path='*' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}