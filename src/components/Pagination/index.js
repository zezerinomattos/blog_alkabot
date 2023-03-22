import React, { useState, useEffect } from 'react';

// MY IMPORTS
import './style.css';

export default function Pagination({setCurrentPage, pages}){

    return(
        <>
            {/* PAGINAÇÃO, CRIANDO OS BOTÕES DE NUMERO DE PAGINAS */}
            <div className='pagination'>
              {Array.from(Array(pages), (item, index) => {
                return <button value={index} onClick={(e) => setCurrentPage(Number(e.target.value))} >{index + 1}</button>
              })}
            </div>
        </>
    )
}