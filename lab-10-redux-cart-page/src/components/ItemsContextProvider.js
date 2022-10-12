import React, { useState, useEffect } from "react";
import { getAllFilms } from "../api/films-api";
import { Film } from "./Film";

export const ItemsContext = React.createContext();

export default ({ children }) => {
  let data = [];
  const [filmsData, setFilmsData] = useState(data);
  const imgSrc = "https://source.unsplash.com/random/300×345/?film";
  useEffect(() => {
    getAllFilms()
      .then((result) => {
        setFilmsData(
          result.map(
            (record) =>
              new Film(
                record.title,
                record.description,
                record.price,
                record.length,
                record.reviews,
                imgSrc
              )
          )
        );
      })
      .catch((error) => {
        console.log("no server response ", error);
        setFilmsData(-1);
      });
  }, []);

  return (
    <ItemsContext.Provider value={[filmsData, setFilmsData]}>
      {children}
    </ItemsContext.Provider>
  );
};
