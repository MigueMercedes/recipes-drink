import { Row } from 'react-bootstrap';
import useBebidas from '../hooks/useBebidas';
import Bebida from './Bebida';

const ListadoFavoritos = () => {
  const { favoritos } = useBebidas();

  return favoritos.length ? (
    <Row className='mt-5'>
      {favoritos.slice(0).reverse().map(bebida => (
        <Bebida
          key={bebida.idDrink}
          bebida={bebida}
        />
      ))}
    </Row>
  ) : (
    <p className='text-center fs-3'>No hay favoritos</p>
  );
};

export default ListadoFavoritos;
