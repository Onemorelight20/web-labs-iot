import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { addFilmId, removeFilmId } from "../../redux/action";

const FilmAsCartItem = ({ imgSrc, imgAlt, description, filmTitle, price }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <img alt={filmTitle} src={imgSrc} height="130px" width="100%" />
        </Grid>
        <Grid item>
          <Typography gutterBottom variant="h5" component="div">
            {filmTitle}
          </Typography>
          <Typography variant="body1">{description}</Typography>
          <Typography>
            <b>Price: {price} UAH</b>
          </Typography>
          <Button
            size="small"
            variant="contained"
            onClick={() => dispatch(removeFilmId(filmTitle))}
          >
            Remove from cart
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default FilmAsCartItem;
