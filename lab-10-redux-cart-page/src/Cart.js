import React, { useContext, useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FilmAsCartItem from "./components/reusable/FilmAsCartItem";
import { Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { addFilmId, removeFilmId } from "./redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { ItemsContext } from "./components/ItemsContextProvider";

function Cart() {
  const [filmsData, setFilmsData] = useContext(ItemsContext);
  const [filmsToShow, setFilmsToShow] = useState(filmsData);
  const filmIds = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (filmIds.size == 0) {
    return (
      <>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={3}>
            <Typography>Here will be your items</Typography>
          </Grid>
        </Grid>
      </>
    );
  } else {
    return (
      <>
        <Grid container p={4}>
          <Typography variant="h4" mb={3}>
            Shopping cart
          </Typography>
          {filmsToShow
            .filter((record) => filmIds.has(record.filmTitle))
            .map((record, id) => (
              <FilmAsCartItem
                imgSrc={record.imgSrc}
                imgAlt={record.imgSrc}
                filmTitle={record.filmTitle}
                description={record.description}
                price={record.price}
              />
            ))}
          <Typography variant="h4" mt={3}>
            You have to pay{" "}
            {filmsToShow
              .filter((record) => filmIds.has(record.filmTitle))
              .reduce(
                (acc, currFilm) => acc + parseInt(currFilm.price),
                0
              )}{" "}
            UAH
          </Typography>
          <Grid item xs={12}>
            <Grid container justifyContent="space-between">
              <Button
                variant="outlined"
                color="primary"
                onClick={() => navigate(-1)}
              >
                Go back
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                  filmIds.forEach((id) => dispatch(removeFilmId(id)));
                }}
              >
                Buy
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Cart;
