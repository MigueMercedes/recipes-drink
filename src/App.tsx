import { Button, Container } from 'react-bootstrap';
import Formulario from './components/Formulario';
import { CategoriasProvider } from './context/CategoriasProvider';
import { BebidasProvider } from './context/BebidasProvider';
import ListadoBebidas from './components/ListadoBebidas';
import ModalBebida from './components/ModalBebida';
import ModalFavoritos from './components/ModalFavoritos';
import { useState } from 'react';

function App() {
  const [isOpenModalFavoritos, setIsOpenModalFavoritos] = useState(false);

  const handleModalFavoritos = () => {
    setIsOpenModalFavoritos(!isOpenModalFavoritos);
  };

  return (
    <BebidasProvider>
      <CategoriasProvider>
        <header className='py-5 d-flex flex-column gap-3'>
          <h1 className='text-center'>Buscador de Bebidas</h1>

          <div className='d-md-flex justify-content-md-end me-md-3'>
            <Button
              variant='warning'
              size='lg'
              onClick={handleModalFavoritos}
            >
              Ver mis favoritos
            </Button>
          </div>
        </header>

        <Container className='mt-5'>
          <Formulario />

          <ListadoBebidas />

          <ModalBebida />

          <ModalFavoritos
            statusModal={isOpenModalFavoritos}
            handleClose={handleModalFavoritos}
          />
        </Container>
      </CategoriasProvider>
    </BebidasProvider>
  );
}

export default App;
