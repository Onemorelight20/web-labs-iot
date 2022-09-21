import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ListItem } from "@material-ui/core";
import { Routes, Route, useNavigate } from "react-router-dom";
// filmTitle,
// description,
// price,
// lengthOfFilm,
// reviewsAmount,
// imgSrc
const Item = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <Card>
        <CardMedia
          component="img"
          alt={props.film.filmTitle}
          height="140"
          image={props.film.imgSrc}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.film.filmTitle}
          </Typography>
          <Typography variant="body1">{props.film.description}</Typography>
          <Typography>
            <b>Price: {props.film.price} UAH</b>
          </Typography>
          <Typography>
            <b>Length of film: {props.film.lengthOfFilm} minutes</b>
          </Typography>
          <Typography>
            <b>Reviews amount: {props.film.reviewsAmount}</b>
          </Typography>
        </CardContent>
        <CardActions>
          <Routes>
            <Button
              size="small"
              variant="contained"
              onClick={() => navigate(-1)}
            >
              Go back
            </Button>
            <Button size="small" variant="contained">
              View More
            </Button>
          </Routes>
        </CardActions>
      </Card>
    </>
  );
};

export default ListItem;
