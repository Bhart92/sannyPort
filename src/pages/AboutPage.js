import { Row, Col, Image } from "react-bootstrap";
import aboutImg from "../photos/about.webp";
import Loader from "../components/Loader";
import useCheckImagesLoaded from "../util/useImageLoadCheck";
const AboutPage = () => {
  const isLoaded = useCheckImagesLoaded(".about-image", () => {
    document.querySelector(".about-content").style.opacity = 1;
  });
  return (
    <div className="about-page mt-5">
      {!isLoaded && <Loader />}
      <div className="about-content">
        <Row className="about-title">
          <Col>
            <h1>About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col className="about-desc mt-4">
            <p>
              Storytelling is an essential entity to daily life. You find
              yourself in it, you lose yourself to it, you delve into a world of
              culture and understanding. It is what I love to do, to try to
              bring to life the pictures and movies that we would otherwise not
              see anywhere else but our minds. It allows a tangible connection,
              an honor I hold in order to bring the imagination to life.
            </p>
          </Col>
        </Row>
        <Row className="about-image-wrapper">
          <Col className="d-flex align-item-center justify-content-center about-image">
            <Image src={aboutImg} rounded height={1012} width={1012} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutPage;
