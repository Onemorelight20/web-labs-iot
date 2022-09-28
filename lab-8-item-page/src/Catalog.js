import React, { useContext, useState, useEffect } from "react";
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import FilmCard from "./components/reusable/FilmCard";
import { centeredContainer } from "./components/styles";
import Typography from "@mui/material/Typography";
import { FilterBlock } from "./components/FilterBlock";
import { ItemsContext } from "./components/ItemsContextProvider";
import { FiltersContext } from "./components/FiltersContextProvider";
import { SearchBlockContext } from "./components/navigation-bar/SearchBlockContextProvider";

const Catalog = () => {
  const [filmsData, setFilmsData] = useContext(ItemsContext);
  const [filtersData, setFiltersData] = useContext(FiltersContext);
  const [searchBlockText, setSearchBlockText] = useContext(SearchBlockContext);
  const [filmsToShow, setFilmsToShow] = useState(filmsData);

  const priceFilterCases = [
    [0, 100],
    [101, 1000],
    [1001, 10000],
    [10001, 1000000],
  ];

  const reviewsFilterCases = [
    [0, 100],
    [101, 1000],
    [1001, 10000],
    [10001, 1000000],
  ];

  const lengthFilterCases = [
    [0, 60],
    [61, 120],
    [121, 180],
    [180, 1200],
  ];

  const applyFilters = () => {
    setFilmsToShow(filmsData);
    console.log(filtersData);
    let filtered = [...filmsData];
    if (filtersData.PRICE_FILTER !== -1) {
      const [minVal, maxVal] = priceFilterCases[filtersData.PRICE_FILTER];
      filtered = filtered.filter(
        (film) => film.price >= minVal && film.price <= maxVal
      );
    }
    if (filtersData.REVIEWS_FILTER !== -1) {
      const [minVal, maxVal] = reviewsFilterCases[filtersData.REVIEWS_FILTER];
      filtered = filtered.filter(
        (film) => film.reviewsAmount >= minVal && film.reviewsAmount <= maxVal
      );
    }
    if (filtersData.LENGTH_FILTER !== -1) {
      const [minVal, maxVal] = lengthFilterCases[filtersData.LENGTH_FILTER];
      filtered = filtered.filter(
        (film) => film.lengthOfFilm >= minVal && film.lengthOfFilm <= maxVal
      );
    }
    setFilmsToShow(filtered);
  };

  const discardFilters = () => {
    setFilmsToShow(filmsData);
  };

  useEffect(() => {
    setFilmsToShow(filmsData);
    applyFilters();
    setFilmsToShow(currFilms => (currFilms.filter(film => film.filmTitle.includes(searchBlockText))))
  }, [searchBlockText]);

  return (
    <>
      <Box sx={{ ...centeredContainer, pt: 1 }}>
        <Typography variant="h5" mb="5px">
          Filters
        </Typography>
        <Grid container sx={{ mb: 5 }}>
          <FilterBlock
            applyFilters={applyFilters}
            discardFilters={discardFilters}
          />
        </Grid>
        <Typography variant="h5" mb="10px">
          Catalog
        </Typography>
        <Grid container spacing={4} sx={{ justifyContent: "left" }}>
          {filmsToShow.map((record, id) => (
            <Grid item key={record.filmTitle + id}>
              <FilmCard
                imgSrc={record.imgSrc}
                imgAlt={record.imgSrc}
                filmTitle={record.filmTitle}
                description={record.description}
                price={record.price}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Catalog;
