import React from "react";
// import { useNavigate, useParams } from "react—router—dom";
import { Link } from "react-router-dom";

const Profile = (props) => {
  // let navigate = useNavigate();

  // let { username } = useParams();

  // const ProfileCustom = ({}) => {};
  return (
    <>
      <Link to="/" state={props}>
        Go Home Image Page{" "}
      </Link>
      <h1 style={{ color: "red" }}>Profile Page </h1>``
    </>
  );
};
export default Profile;
