import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://source.unsplash.com/random/300×345/?film",
  headers: {
    'Content-type': 'image/jpeg'
  }
});

export const getRandomFilmImg = async () => {
  return (await axiosInstance.get()).data;
};
