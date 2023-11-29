import { Row, Spinner } from 'react-bootstrap';
import useBebidas from '../hooks/useBebidas';
import Bebida from './Bebida';

const ListadoBebidas = () => {
  const { bebidas, loading } = useBebidas();

  return !loading ? (
    <Row className='mt-5'>
      {bebidas.map(bebida => (
        <Bebida
          key={bebida.idDrink}
          bebida={bebida}
        />
      ))}
    </Row>
  ) : (
    <Spinner
      animation='border'
      role='status'
      className='mt-5 d-block mx-auto'
      style={{ width: '130px', height: '130px', }}
    >
      <span className='visually-hidden'>Cargando...</span>
    </Spinner>
  );
};

export default ListadoBebidas;
