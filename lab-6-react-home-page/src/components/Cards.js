import React from "react";
import FilmCard from "./FilmCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
    <>
      <Box container sx={{ m: 10, mb:20 }}>
        <Typography variant="h4" my="10px">The best choices</Typography>
        <Grid container justifyContent="space-around" spacing={2}>
          {data.map((record) => 
            <Grid item>
            <FilmCard
              imgSrc={record[0]}
              imgAlt={record[1]}
              cardTitle={record[1]}
              cardText={record[2]}
            />
          </Grid>
          )}
        </Grid>
        <Grid container justifyContent="center" sx={{my: 5}}>
        <Button variant="contained" size="large" >More films</Button>
        </Grid>
      </Box>
    </>
  );
};

export default Cards;
