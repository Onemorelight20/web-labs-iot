import React from "react";
import FilmCard from "./reusable/FilmCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { centeredContainer } from "./styles";
import { BasicStyledLink } from "./reusable/StyledLinks";
import { data } from "./data";

const Cards = () => {
  const catalogPath = "/catalog";

  return (
    <Box sx={centeredContainer}>
      <Typography variant="h4" mb="10px">
        The best choices
      </Typography>
      <Grid container spacing={2} sx={{ justifyContent: "space-around" }}>
        {data.slice(0, 3).map((record, id) => (
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
        <BasicStyledLink to={catalogPath}>
          <Button variant="contained" size="large">
            More films
          </Button>
        </BasicStyledLink>
      </Grid>
    </Box>
  );
};

export default Cards;
