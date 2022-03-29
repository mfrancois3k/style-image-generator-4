
import axios from "axios";

export const getUnsplash = async () => {
  const response = axios.get(
    `https://api.unsplash.com/photos/?client_id=-22aS1UD78EqixN-DCCit4SNU0DSkr3Jjg1-evhZ9tY`
  )
  return response
}