// import { GetUnsplash } from "../../Services/GetUnsplash";
import { useEffect, useState } from "react";
import axios from "axios";

// import { ImageContext } from "../App";

const Image = () => {
  // const [image, setImage] = useState([]);

  // async function getImageData() {
  //   if (props.data) {
  //     const result = await axios.get(GetUnsplash + props.data);

  //     setImage(result.data);
  //     console.log(result.data);
  //     return result;
  //   } else {
  //     setImage([]);
  //   }
  // }

  // useEffect(() => {
  //   getImageData();
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [images, setImages] = useState([]);
  const [loaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = (count = 10) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey =
      "a22f61e98da4efa25d8860e77a91a596867dd335ecdf7feb12e086943db9565a";

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
      .then((res) => {
        setImages([...images, ...res.data]);
        setIsLoaded(true);

        console.log(images);
      });
  };

  const UnsplashImage = ({ url, key }) => (
    <div className="image-item" key={key}>
      <img src={url} />
    </div>
  );

  return (
    <>
      {/* <img src={image.url} alt="cat" /> */}
      {images.map((image, index) => (
        <UnsplashImage url={image.urls.small} key={index} />
      ))}
    </>
  );
};

export default Image;
