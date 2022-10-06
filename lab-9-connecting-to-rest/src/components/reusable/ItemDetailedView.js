import React, { useContext } from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ItemsContext } from "../ItemsContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import Image from "material-ui-image";
import { centeredContainer } from "../styles";

const ItemDetailedView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [filmsData, setFilmsData] = useContext(ItemsContext);
  const film = filmsData.find((el) => el.filmTitle == id);

  return (
    <>
      <Box sx={centeredContainer}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Image
              alt={film.filmTitle}
              height="200"
              src={film.imgSrc}
              />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography gutterBottom variant="h5" component="div">
              {film.filmTitle}
            </Typography>
            <Typography variant="body1">{film.description}</Typography>
            <Typography>
              <b>Price: {film.price} UAH</b>
            </Typography>
            <Typography>
              <b>Length of film: {film.lengthOfFilm} minutes</b>
            </Typography>
            <Typography>
              <b>Reviews amount: {film.reviewsAmount}</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item>
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => navigate(-1)}
                >
                  Go back
                </Button>
              </Grid>
              <Grid item>
                <Button size="small" variant="contained">
                  Add to cart
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ItemDetailedView;
