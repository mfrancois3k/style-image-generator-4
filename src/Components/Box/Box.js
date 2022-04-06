import React from "react";
import { Link } from "react-router-dom";

const Box = (props) => {
  // let navigate = useNavigate();

  // const location = useLocation();

  const boxCustom = ({}) => {};
  return (
    <>
      {/* <button onClick={() => {navigate("/home") */}
      <Link to="/profile" state={props}>
        Go to Profile Page (Link #1)
      </Link>
      <Link to="/">Go Home</Link>
      <h1 style={{ color: "blue" }}>Box Page </h1>``
    </>
  );
};
export default Box;
