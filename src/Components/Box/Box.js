import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Box.css";

const Box = (props) => {
  const [images, setImages] = useState([]);
  // const [loaded, setIsLoaded] = useState(false);

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
        // setIsLoaded(true);

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
      <Link to="/profile" state={props}>
        Go Profile Image Page{" "}
      </Link>
      <Link to="/home" state={props}>
        Go Home Image Page{" "}
      </Link>

      {images.map((image, index) => (
        <UnsplashImage images={images} url={image.urls.small} key={index} />
      ))}

      <Link to="/profile" state={props}>
        <p> Go to Profile Page (Link #1)</p>
      </Link>

      <h1>Box Page </h1>
    </>
  );
};
export default Box;
