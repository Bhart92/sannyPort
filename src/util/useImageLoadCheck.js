import { useState, useEffect } from "react";

function useCheckImagesLoaded(container, callBack) {
  const containerEle = container;
  const [imagesLoaded, setImagesLoaded] = useState();

  const onImagesLoaded = (container, callBack, event) => {
    const images = container.getElementsByTagName("img");
    let loaded = images.length;
    for (let i = 0; i < images.length; i++) {
      if (images[i].complete) {
        loaded--;
      } else {
        images[i].addEventListener("load", function () {
          loaded--;
          if (loaded === 0) {
            event();
          }
        });
      }
      if (loaded === 0) {
        event();
      }
    }
  };
  const updateImageLoaded = () => {
    setImagesLoaded(true);
  };

  useEffect(() => {
    const container = document.querySelector(`${containerEle}`);
    const images = Array.from(container.getElementsByTagName("img"));

    onImagesLoaded(container, callBack, () => {
      updateImageLoaded();
      if (callBack) callBack(images);
    });
  }, []);
  return imagesLoaded;
}

export default useCheckImagesLoaded;
