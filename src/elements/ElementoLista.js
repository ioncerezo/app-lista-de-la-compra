import React from 'react'
import { MdDelete, MdCheckCircleOutline, MdCheckCircle } from 'react-icons/md';
import { useState } from 'react';

function ElementoLista({id,elemento,cantidad,manejarDelete}){

    
    const [completado, setCompletado] = useState(false);
    function manejarCompletado () {
        setCompletado(!completado)
    }
    return(
    <div key={id} id={id} className={completado ? ' p-3  w-full my-4 flex justify-between items-center line-through placeholder:text-gray-500 text-gray-500' : ' p-3 w-full my-4 flex justify-between'}>
        <div className=' select-none flex w-[350px] items-center gap-5'>
         <MdCheckCircleOutline onClick={() => manejarCompletado()} className={completado ? 'hidden' : 'text-2xl text-sky-600'}/>
            <MdCheckCircle onClick={() => manejarCompletado()} className={completado ? 'text-2xl text-sky-600' : 'hidden'}/>
            <p onClick={() => manejarCompletado()} className='   w-full'>{elemento}</p>
        </div>
    
        <input className={completado ? 'placeholder:text-gray-500 ml-12 w-9 pointer-events-none' : ' placeholder:text-black ml-12 w-9 '} type='number' placeholder={cantidad} min='1' max='99'></input>
        <div id={id} onClick={manejarDelete} className='flex items-center text-sky-600 text-2xl p-1 hover:bg-sky-600 hover:text-white rounded-sm '><MdDelete/></div>
    </div>
    )
}

export default ElementoLista