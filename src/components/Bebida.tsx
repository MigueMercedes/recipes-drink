import { Button, Card, Col } from 'react-bootstrap';
import useBebidas from '../hooks/useBebidas';
import { Drink } from '../interfaces/Bebidas.interface';

const Bebida = ({ bebida, isFavorito }: { bebida: Drink; isFavorito?: boolean }) => {
  const { handleModal, handleBebidaId, handleEliminarFavorito } = useBebidas();
  return (
    <Col
      md={6}
      lg={4}
      xl={3}
    >
      <Card className='mb-4 position-relative'>
        {isFavorito && (
          <div
            className='position-absolute z-1 top-0 end-0'
            style={{ cursor: 'pointer' }}
            onClick={() => {
              if (confirm('Desea eliminar la bebida de sus favoritos?')) {
                handleEliminarFavorito(bebida.idDrink);
              }
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill={isFavorito ? '#ff5500' : 'none'}
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              width={40}
              height={40}
              color='#000'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
              />
            </svg>
          </div>
        )}

        <Card.Img
          variant='top'
          src={bebida.strDrinkThumb}
        />

        <Card.Body
          className='text-center'
          style={{ minHeight: '130px' }}
        >
          <Card.Title style={{ minHeight: '50px' }}>{bebida.strDrink}</Card.Title>
          <Button
            variant='warning'
            className='w-100 mt-2 mb-auto text-uppercase'
            onClick={() => {
              handleModal();
              handleBebidaId(bebida.idDrink);
            }}
          >
            Ver Receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Bebida;
