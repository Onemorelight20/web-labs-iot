import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:3000/films",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export const getAllFilms = async () => {
  return (await axiosInstance.get()).data;
};

export const getFilmsFiltered = async (params) => {
  return (await axiosInstance.get("", { params })).data;
};
