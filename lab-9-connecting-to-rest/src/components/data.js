import { Film } from "./Film";

const fingtersClubImgSrc = require("../assets/fighters-club.jpg");
const interstellarImgSrc = require("../assets/interstellar.jpg");
const wallStreetWolfImgSrc = require("../assets/wall-street-wolf.jpg");
const jokerImgSrc = require("../assets/joker.jpg");

export const data = [
  new Film(
    "Fight Club",
    "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    1000,
    216,
    40000,
    fingtersClubImgSrc
  ),
  new Film(
    "Interstellar",
    "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    350,
    314,
    80000,
    interstellarImgSrc
  ),
  new Film(
    "The Wolf of Wall Street",
    "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
    500,
    435,
    900,
    wallStreetWolfImgSrc
  ),
  new Film(
    "Joker",
    "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.",
    600,
    535,
    988,
    jokerImgSrc
  ),
];
