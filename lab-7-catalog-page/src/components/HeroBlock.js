import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import {useStyles, centeredContainer} from './styles.js';

const filmPicture = require("../assets/photo-film.jpg");

const HeroBlock = () => {
  const classes = useStyles()

  return (
    <Box sx={centeredContainer} >
      <Grid container spacing={2}>
        <Grid item xs>
          <Typography variant="h2">Some text about films</Typography>
          <Typography variant="body1" sx={{mt:2}}>
            A film, also called a movie or motion picture, is a series of still
            images on a strip of plastic which, when run through a projector and
            shown on a screen, creates the illusion of moving images. A film is
            created by photographing actual scenes with a motion picture camera;
            by photographing drawings or miniature models using traditional
            animation techniques; by means of CGI (Computer-generated imagery)
            and computer animation; or by a combination of some or all of these
            techniques and other visual effects. The process of filmmaking is
            both an art and an industry.
            From <a href="https://www.myenglishpages.com/english/reading-film.php">here</a>.
          </Typography>
        </Grid>
        <Grid item xs>
          <Box
            component="img"
            src={filmPicture}
            className={classes.bigImage}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroBlock;
