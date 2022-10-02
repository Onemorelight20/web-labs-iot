import React, { useContext, useState, useEffect } from "react";
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import FilmCard from "./components/reusable/FilmCard";
import DataLoadingSymbol from "./components/reusable/DataLoadingSymbol";
import { centeredContainer } from "./components/styles";
import Typography from "@mui/material/Typography";
import ErrorBlock from "./components/ErrorBlock";
import { FilterBlock } from "./components/FilterBlock";
import { ItemsContext } from "./components/ItemsContextProvider";
import {
  FiltersContext,
  noFiltersobj,
  priceFilterCases,
  reviewsFilterCases,
  lengthFilterCases,
} from "./components/FiltersContextProvider";
import { SearchBlockContext } from "./components/navigation-bar/SearchBlockContextProvider";
import { getAllFilms, getFilmsFiltered } from "./api/films-api";
import { Film } from "./components/Film";

const Catalog = () => {
  const [filmsData, setFilmsData] = useContext(ItemsContext);
  const [filtersData, setFiltersData] = useContext(FiltersContext);
  const [searchBlockText, setSearchBlockText] = useContext(SearchBlockContext);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [filmsToShow, setFilmsToShow] = useState(filmsData);

  const imgSrc = "https://source.unsplash.com/random/300×345/?film";
  useEffect(() => {
    setIsDataLoading(true);
    getAllFilms()
      .then((result) => {
        console.log(result);
        setFilmsToShow(
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
        setIsDataLoading(false);
      })
      .catch((error) => {
        setIsDataLoading(false);
        console.log("no server response ", error);
        setFilmsData(-1);
      });
  }, []);

  const applyFilters = () => {
    setIsDataLoading(true);
    const paramsForFilter = {};
    if (filtersData.PRICE_FILTER !== -1) {
      const [minVal, maxVal] = priceFilterCases[filtersData.PRICE_FILTER];
      paramsForFilter.minPrice = minVal;
      paramsForFilter.maxPrice = maxVal;
    }
    if (filtersData.REVIEWS_FILTER !== -1) {
      const [minVal, maxVal] = reviewsFilterCases[filtersData.REVIEWS_FILTER];
      paramsForFilter.minReviews = minVal;
      paramsForFilter.maxReviews = maxVal;
    }
    if (filtersData.LENGTH_FILTER !== -1) {
      const [minVal, maxVal] = lengthFilterCases[filtersData.LENGTH_FILTER];
      paramsForFilter.minLength = minVal;
      paramsForFilter.maxLength = maxVal;
    }
    console.log("paramsForFilter are ", paramsForFilter);
    getFilmsFiltered(paramsForFilter)
      .then((result) => {
        console.log(result);
        setFilmsToShow(
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
        setIsDataLoading(false);
      })
      .catch((error) => {
        console.log("no server response ", error);
        setFilmsData(-1);
        setIsDataLoading(false);
      });
  };

  const discardFilters = () => {
    setFiltersData(noFiltersobj);
    setSearchBlockText("");
    setFilmsToShow(filmsData);
  };

  useEffect(() => {
    setFilmsToShow((currFilms) =>
    currFilms.filter((film) => film.filmTitle.includes(searchBlockText))
  );
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
        {console.log("IS DATA LOADING", isDataLoading)}
        {isDataLoading && <DataLoadingSymbol />}
        {filmsData == -1 && (
          <ErrorBlock
            errorCode="503"
            text="No response from server, try again later"
          />
        )}
        {filmsData !== -1 && (
          <>
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
          </>
        )}
      </Box>
    </>
  );
};

export default Catalog;
