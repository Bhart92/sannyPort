import { Image, Row, Col } from "react-bootstrap";
import photos from "../photos";
import { useState } from "react";
import useCheckImagesLoaded from "../util/useImageLoadCheck";
import Loader from "./Loader";
import ImageModal from "./ImageModal";
const PhotoGallery = () => {
  const [currentImage, setCurrentImage] = useState();
  const [show, setShow] = useState(false);
  const handleImageChange = (e) => {
    setCurrentImage(e.target.src);
    setShow(true);
  };
  const isLoaded = useCheckImagesLoaded(".image-gallery", (items) =>
    items.map((item) => (item.style.opacity = "1"))
  );

  const generatePhotoMarkup = () => {
    return (
      <div className="d-flex justify-content-center flex-wrap">
        {photos.map((image, i) => {
          if (i % 2 === 0) {
            return (
              <Row
                className="d-flex image-row"
                xs={1}
                sm={2}
                lg={2}
                key={image.src}
              >
                <Col className="d-flex justify-content-center">
                  <div className="image-wrapper justify-content-center">
                    <Image
                      src={image.src}
                      thumbnail
                      onClick={handleImageChange}
                    />
                  </div>
                </Col>{" "}
                <Col className="d-flex justify-content-center">
                  <div className="image-wrapper">
                    {photos[i + 1] && (
                      <Image
                        src={photos[i + 1].src}
                        thumbnail
                        onClick={handleImageChange}
                      />
                    )}
                  </div>
                </Col>
              </Row>
            );
          }
        })}
      </div>
    );
  };
  return (
    <div>
      {!isLoaded && <Loader />}
      {generatePhotoMarkup()}
      <ImageModal show={show} setShow={setShow} image={currentImage} />
    </div>
  );
};

export default PhotoGallery;
