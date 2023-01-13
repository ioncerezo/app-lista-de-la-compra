import './App.css';
import Formulario from './elements/Formulario';
import Lista from './elements/Lista';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [cantidad, setCantidad] = useState();
  const [producto, setProducto] = useState();
  const [elemento, setElemento] = useState([]);
  



  function manejarProducto (e) {
    setProducto(e.target.value)
  }
  function manejarCantidad (e) {
    setCantidad(e.target.value)
  }
  function agregarALaLista(e) {
    e.preventDefault();
    let newElemento = {id:uuidv4(), elemento:producto , cantidad:cantidad}
    let elementosActualizados = [newElemento,...elemento]
    setElemento(elementosActualizados)
    
  }

  function eliminarTarea(e) {
    
    let elementosActualizados = elemento.filter(i => i.id !== e.target.parentNode.parentNode.id)
    setElemento(elementosActualizados)
  }
  return (
    <div className=' p-6 bg-gradient-to-tr from-sky-400 to-sky-600 w-full min-h-screen flex flex-col items-center'>
      
      <div className='container lg:max-w-[1024px] m-6 bg-white rounded-2xl px-7 p-4 shadow-xl'>
        <Formulario
          manejarClick={agregarALaLista}
          manejarCantidad={manejarCantidad}
          manejarProducto={manejarProducto}
        />
      </div>
      <div className=' container lg:max-w-[1024px] min-h-[400px] m-3 bg-white rounded-2xl px-7 p-4 shadow-xl'>
        <h1 className='flex items-center mb-8 mt-4 text-2xl text-center font-bold text-sky-600 uppercase'><hr className=' flex-grow mx-4 h-0.5 bg-sky-600 border-0 rounded-sm'></hr>Lista de la compra<hr className=' flex-grow mx-4 h-0.5 bg-sky-600 border-0 rounded-sm'></hr></h1>
        <div className='w-full my-2 flex justify-between text-sky-600 font-semibold'>
        <div className='flex w-[350px] gap-5'>
          <hr className='invisible w-[23px]'></hr>
          <p className=' w-1/3'>Producto:</p>
        </div>
      
          <p>Cantidad:</p>
          <hr />
        </div>
        <Lista manejarDelete={eliminarTarea} elemento={elemento}/>
      </div>
    </div>
  );
}

export default App;
