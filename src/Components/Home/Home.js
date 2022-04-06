import React from "react";
// import { useNavigate } from "react—router—dom";
import { Link } from "react-router-dom";

const Home = (props) => {
  // let navigate = useNavigate();

  // let { profile } = useParams();
  //   const Context = useContext(ImageContext);
  //   console.log(Context);
  return (
    <>
      <Link to="/image" state={props}></Link>

      <h1 style={{ color: "green" }}>Home Page </h1>
    </>
  );
};
export default Home;
