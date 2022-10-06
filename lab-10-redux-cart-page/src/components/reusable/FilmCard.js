import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Image from "material-ui-image";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { getRandomFilmImg } from "../../api/images-api";
import { BasicStyledLink } from "./StyledLinks";

const FilmCard = ({ imgSrc, imgAlt, description, filmTitle, price }) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <CardMedia>
            <Image
              src={imgSrc}
              height="140"
            />
          </CardMedia>
          <Typography gutterBottom variant="h5" component="div">
            {filmTitle}
          </Typography>
          <Typography>
            <b>Price: {price} UAH</b>
          </Typography>
          <Typography variant="body1" sx={{ minHeight: 100 }}>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained">
            Buy
          </Button>
          <Button size="small" variant="contained">
            <BasicStyledLink to={"/item/" + filmTitle} sx={{ color: "white" }}>
              View More
            </BasicStyledLink>
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default FilmCard;
