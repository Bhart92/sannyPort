import { Row } from "react-bootstrap";
import PhotoGallery from "../components/PhotoGallery";

import Loader from "../components/Loader";
const HomePage = () => {
  return (
    <div className="home-wrapper">
      <Row className="text-center d-flex justify-content-center align-items-center title">
        <h2>Sanny's Art</h2>
      </Row>
      <Row className="image-gallery">
        <PhotoGallery />
      </Row>
    </div>
  );
};

export default HomePage;
