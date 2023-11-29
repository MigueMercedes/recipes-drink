import { Button, Card, Col } from 'react-bootstrap';
import { Drink } from '../interfaces/Bebidas.interface';
import useBebidas from '../hooks/useBebidas';

const Bebida = ({ bebida }: { bebida: Drink }) => {
  const { handleModal, handleBebidaId } = useBebidas();
  return (
    <Col
      md={6}
      lg={4}
      xl={3}
    >
      <Card className='mb-4'>
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
