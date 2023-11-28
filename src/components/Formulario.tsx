import { Col, Form, Row } from 'react-bootstrap';
import useCategorias from '../hooks/useCategorias';

const Formulario = () => {
  const { categorias } = useCategorias();
  return (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='nombre'>Nombre Bebida</Form.Label>
            <Form.Control
              type='text'
              placeholder='Ej: Tequila'
              name='nombre'
              id='nombre'
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='categoria'>Nombre Bebida</Form.Label>
            <Form.Select
              name='categoria'
              id='categoria'
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
    </Form>
  );
};

export default Formulario;
