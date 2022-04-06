import axios from "axios";

export const GetUnsplash = () => {
  const response = axios.get(`https://api.thecatapi.com/v1/images/`);
  console.log(response);
  return response;
};
