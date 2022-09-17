import React from "react";
import FilmCard from "./reusable/FilmCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { centeredContainer } from "./styles";

const fingtersClubImgSrc = require("../assets/fighters-club.jpg");
const interstellarImgSrc = require("../assets/interstellar.jpg");
const wallStreetWolfImgSrc = require("../assets/wall-street-wolf.jpg");
const jokerImgSrc = require("../assets/joker.jpg");
const data = [
    [fingtersClubImgSrc, "Fight Club", "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more."],
    [interstellarImgSrc, "Interstellar", "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."],
    [wallStreetWolfImgSrc, "The Wolf of Wall Street", "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government."],
    [jokerImgSrc, "Joker", "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain."]

];

const Cards = () => {
  return (
      <Box sx={centeredContainer}>
        <Typography variant="h4" mb="10px">The best choices</Typography>
        <Grid container spacing={2} sx={{justifyContent: "space-between"}}>
          {data.map((record, id) => 
            <Grid item key={id}>
            <FilmCard
              imgSrc={record[0]}
              imgAlt={record[1]}
              cardTitle={record[1]}
              cardText={record[2]}
            />
          </Grid>
          )}
        </Grid>
        <Grid container sx={{my: 5, justifyContent: "center"}}>
        <Button variant="contained" size="large" >More films</Button>
        </Grid>
      </Box>
  );
};

export default Cards;
