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
import { useSelector, useDispatch } from "react-redux";
import { addFilmId, removeFilmId } from "../../features/cart/cartSlice";

const FilmCard = ({ imgSrc, imgAlt, description, filmTitle, price }) => {
  const filmIds = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <CardMedia>
            <Image src={imgSrc} height="140" />
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
          {filmIds.has(filmTitle) ? (
            <Button
              size="small"
              variant="contained"
              onClick={() => dispatch(removeFilmId(filmTitle))}
            >
              Remove from cart
            </Button>
          ) : (
            <Button
              size="small"
              variant="contained"
              onClick={() => dispatch(addFilmId(filmTitle))}
            >
              Add to cart
            </Button>
          )}
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
