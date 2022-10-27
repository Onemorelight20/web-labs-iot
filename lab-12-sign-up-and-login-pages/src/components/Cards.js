import React, { useContext, useState, useEffect } from "react";
import FilmCard from "./reusable/FilmCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ErrorBlock from "./ErrorBlock";
import DataLoadingSymbol from "./reusable/DataLoadingSymbol";
import { centeredContainer } from "./styles";
import { ItemsContext } from "./ItemsContextProvider";

const Cards = () => {
  const filmsToShowLimited = 3;
  const [filmsData] = useContext(ItemsContext);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    setIsDataLoading(true);
    if (filmsData == -1 || (Array.isArray(filmsData) && filmsData.length > 0)) {
      setIsDataLoading(false);
    }
  }, [filmsData]);

  return (
    <Box sx={centeredContainer}>
      <Typography variant="h4" mb="10px">
        The best choices
      </Typography>
      {filmsData == -1 && (
        <ErrorBlock
          errorCode="503"
          text="No response from server, try again later"
        />
      )}
      {!isDataLoading && filmsData !== -1 ? (
        <>
          <Grid container spacing={2} sx={{ justifyContent: "space-around" }}>
            {filmsData
              .slice(0, showMore ? filmsData.size : filmsToShowLimited)
              .map((record, id) => (
                <Grid item key={id}>
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
          <Grid container sx={{ my: 5, justifyContent: "center" }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => setShowMore((currShowMore) => !currShowMore)}
            >
              {showMore ? "Show less" : "More films"}
            </Button>
          </Grid>
        </>
      ) : (
        <DataLoadingSymbol />
      )}
    </Box>
  );
};

export default Cards;
