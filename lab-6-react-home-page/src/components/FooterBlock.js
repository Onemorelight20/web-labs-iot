import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Stack, Typography } from "@mui/material";
import { FacebookIconStyled, InstagramIconStyled, LinkedInIconStyled, MovieFilterIconStyled } from "./reusable/Icons";
import { centeredContainer } from "./styles";

const FooterBlock = () => {

    return (
        <Box sx={{...centeredContainer, py:3}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">FilmliF</Typography>
            <Typography variant="body2">
              A film, also called a movie or motion picture, is a series of still
              images on a strip of plastic which, when run through a projector and
              shown on a screen, creates the illusion of moving images.
              From <a href="https://www.myenglishpages.com/english/reading-film.php">here</a>.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
          <Stack direction="row" alignItems="center" justifyContent="center">
          <MovieFilterIconStyled />
          </Stack>
          </Grid>
          <Grid item xs={12} md={4} sx={{m: "auto"}} >
            <Box display="flex" justifyContent="flex-end" alignItems="center">
            <FacebookIconStyled />
            <InstagramIconStyled />
            <LinkedInIconStyled />
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
}


export default FooterBlock;