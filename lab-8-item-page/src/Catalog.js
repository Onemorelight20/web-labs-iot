import React from "react";
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import FilmCard from "./components/reusable/FilmCard";
import { centeredContainer } from "./components/styles";
import Typography from "@mui/material/Typography";
import { FilterBlock } from "./components/FilterBlock";
import { data } from "./components/data";

function Catalog() {
  return (
    <>
      <Box sx={{ ...centeredContainer, pt: 1 }}>
        <Typography variant="h5" mb="5px">
          Filters
        </Typography>
        <Grid container sx={{ mb: 5 }}>
          <FilterBlock />
        </Grid>
        <Typography variant="h5" mb="10px">
          Catalog
        </Typography>
        <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
          {data.map((record, id) => (
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
}

export default Catalog;
