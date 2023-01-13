import { MdShoppingCart } from 'react-icons/md';
function Formulario({manejarClick, manejarProducto, manejarCantidad}) {
  return (
    <form onSubmit={manejarClick} className=' flex justify-between items-center flex-wrap'>
      <div className='md:flex-none md:w-auto w-full flex items-center'>
        <label className='text-sky-600 font-semibold'>Producto: </label>
        <input
          className='py-2 px-4 m-4 rounded border border-sky-600 w-full'
          type='text'
          onChange={manejarProducto}
        ></input>
      </div>
      <div>
        <label className='text-sky-600 font-semibold'>Cantidad: </label>
        <input
          className='py-2 px-4 m-4 rounded border border-sky-600'
          type='number'
          onChange={manejarCantidad}
          min='1' max='99'
        ></input>
      </div>
      <button type='submit' className='mr-4 bg-transparent flex justify-between items-center gap-3 hover:bg-sky-600 text-sky-600 font-semibold hover:text-white py-3 px-4 border border-sky-600 hover:border-transparent rounded'>
        <span className='hidden lg:block '>Agregar a la lista</span> <MdShoppingCart className='text-lg' />
      </button>
    </form>
  );
}

export default Formulario