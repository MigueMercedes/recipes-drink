import { Modal } from 'react-bootstrap';
import ListadoFavoritos from './ListadoFavoritos';

interface ModalFavoritosProps {
  statusModal: boolean;
  handleClose: () => void;
}

const ModalFavoritos = ({ statusModal, handleClose }: ModalFavoritosProps) => {
  return (
    <Modal
      size='xl'
      show={statusModal}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>Favoritos</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <ListadoFavoritos />
      </Modal.Body>
    </Modal>
  );
};

export default ModalFavoritos;
