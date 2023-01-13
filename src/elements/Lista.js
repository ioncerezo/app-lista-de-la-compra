import ElementoLista from './ElementoLista';

function Lista({elemento, manejarDelete}) {

  return (
    <>
      {
        elemento.map(e => <ElementoLista manejarDelete={manejarDelete} id={e.id} key={e.id} elemento={e.elemento} cantidad={e.cantidad}/>)
      }
    </>
  );
}

export default Lista;
