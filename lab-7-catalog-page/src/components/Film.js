export class Film {
  constructor(
    filmTitle,
    description,
    price,
    lengthOfFilm,
    reviewsAmount,
    imgSrc
  ) {
    this.filmTitle = filmTitle;
    this.description = description;
    this.price = price;
    this.lengthOfFilm = lengthOfFilm;
    this.reviewsAmount = reviewsAmount;
    this.imgSrc = imgSrc;
  }
}
