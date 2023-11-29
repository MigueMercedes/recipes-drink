import { Button, Image, Modal } from 'react-bootstrap';
import useBebidas from '../hooks/useBebidas';
import { BebidaDetails } from '../interfaces/Bebida.interface';

const ModalBebida = () => {
  const { modal, handleModal, receta, loading, handleAgregarFavorito } = useBebidas();

  const mostrarIngredientes = () => {
    const ingredientes = [];

    for (let i = 1; i < 16; i++) {
      if (receta[`strIngredient${i}` as keyof BebidaDetails]) {
        ingredientes.push(
          <li>
            {receta[`strIngredient${i}` as keyof BebidaDetails]}{' '}
            {receta[`strMeasure${i}` as keyof BebidaDetails]}
          </li>,
        );
      }
    }

    return ingredientes;
  };

  return (
    !loading && (
      <Modal
        show={modal}
        onHide={handleModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>{receta.strDrink}</Modal.Title>
        </Modal.Header>

        <Image
          src={receta.strDrinkThumb}
          alt={`Imagen de ${receta.strDrink}`}
          className='border'
        />

        <Modal.Body>
          <div className='p-3'>
            <h2>Instrucciones</h2>
            {receta.strInstructions}
            <div className='mt-3' />
            <h2>Ingredientes</h2>
            {mostrarIngredientes()}
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button
            className='w-100'
            onClick={() => {
              handleModal();
              handleAgregarFavorito({
                idDrink: receta.idDrink,
                strDrink: receta.strDrink,
                strDrinkThumb: receta.strDrinkThumb,
              });
            }}
          >
            Agregar a Favoritos
          </Button>
        </Modal.Footer>
      </Modal>
    )
  );
};

export default ModalBebida;
