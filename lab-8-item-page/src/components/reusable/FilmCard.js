import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { BasicStyledLink } from "./StyledLinks";

const FilmCard = ({ imgSrc, imgAlt, description, filmTitle, price }) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" alt={imgAlt} height="140" image={imgSrc} />
        <CardContent>
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
            <BasicStyledLink to={'/item/'+filmTitle} sx={{color: "white"}}>
            View More
            </BasicStyledLink>
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default FilmCard;
