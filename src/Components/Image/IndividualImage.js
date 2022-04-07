import "./Image.css";

const IndividualImage = ({ images }) => {
  return (
    <div className="photo">
      <li>
        <img src={images.urls.small} alt="unSplash" />
      </li>
    </div>
  );
};

export default IndividualImage;
