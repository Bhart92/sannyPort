import { Modal, Image, Button, Container } from "react-bootstrap";
import { FaWindowClose } from "react-icons/fa";
const ImageModal = ({ show, setShow, image }) => {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Container className="d-flex justify-content-end align-items-end close-btn">
            <FaWindowClose onClick={handleClose} />
          </Container>
          {image ? <Image src={image} rounded></Image> : ""}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ImageModal;
