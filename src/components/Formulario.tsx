import { FormEvent, useState } from 'react';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
import useCategorias from '../hooks/useCategorias';
import useBebidas from '../hooks/useBebidas';

const Formulario = () => {
  const { categorias } = useCategorias();
  const { obtenerBebidas } = useBebidas();

  const [alerta, setAlerta] = useState('');
  const [busqueda, setBusqueda] = useState({
    nombre: '',
    categoria: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(busqueda).includes('')) {
      setAlerta('Todos los campos son obligatorios');
      return;
    }

    setAlerta('');
    obtenerBebidas()
  };

  return (
    <Form onSubmit={handleSubmit}>
      {alerta && (
        <Alert
          variant='danger'
          className='text-center'
        >
          {alerta}
        </Alert>
      )}
      <Row>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='nombre'>Nombre Bebida</Form.Label>
            <Form.Control
              type='text'
              placeholder='Ej: Tequila'
              name='nombre'
              id='nombre'
              onChange={e =>
                setBusqueda({
                  ...busqueda,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='categoria'>Categoría</Form.Label>
            <Form.Select
              name='categoria'
              id='categoria'
              onChange={e =>
                setBusqueda({
                  ...busqueda,
                  [e.target.name]: e.target.value,
                })
              }
            >
              <option value=''>-- Seleccionar Categoría --</option>
              {categorias?.map(categorias => (
                <option
                  key={categorias.strCategory}
                  value={categorias.strCategory}
                >
                  {categorias.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row className='justify-content-center'>
        <Col md={3}>
          <Button
            type='submit'
            className='text-uppercase w-100'
          >
            Buscar Bebidas
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Formulario;
