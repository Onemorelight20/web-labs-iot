import { Film } from "./film_model.js";
import { timeCountForm, modalFormLabel } from "./app.js";
import { postFilm, updateFilm, deleteFilm } from "./api.js";
import { refetchAllFilms } from "./app.js";

export const filmForm = document.getElementById("film-form");
export const addFilmButton = document.getElementById("add-film-button");
const filmAddedInfoId = "film-added-info";

export const createFilm = () => {
  const film = getFilmFromFormFields();
  clearFormFields();
  postFilm(film).then(refetchAllFilms);
  document.getElementById("modal-close-btn").click();

  const insertedContent = document.getElementById(filmAddedInfoId);
  if (insertedContent) {
    insertedContent.parentNode.removeChild(insertedContent);
  }
  const htmlToInsert = `<p id="${filmAddedInfoId}">Film <strong>${film.filmTitle}</strong> was successfully added</p>`;
  timeCountForm.insertAdjacentHTML("afterend", htmlToInsert);
};

export const prepareEditFilmForm = (e) => {
  modalFormLabel.innerHTML = "Edit a film";
  const filmToEdit = getFilmFromMouseEvent(e);
  document.getElementById("film-title").value = filmToEdit.filmTitle;
  document.getElementById("length-of-film").value = filmToEdit.lengthOfFilm;
  document.getElementById("reviews-amount").value = filmToEdit.reviewsAmount;
  const hiddenEl = document.createElement("div");
  hiddenEl.setAttribute("id", `${filmToEdit.id}`);
  modalFormLabel.appendChild(hiddenEl);
};

export const deleteFilmProcessing = (e) => {
  if (confirm("are you sure?")) {
    const filmToDelete = getFilmFromMouseEvent(e);
    deleteFilm(filmToDelete.id).then(refetchAllFilms);
  }
};

export const editFilm = () => {
  const id = modalFormLabel.childNodes[1].id;
  const film = getFilmFromFormFields();
  updateFilm(id, film).then(refetchAllFilms);
  clearFormFields();
  document.getElementById("modal-close-btn").click();
};

const clearFormFields = () => {
  document.getElementById("film-title").value = "";
  document.getElementById("length-of-film").value = "";
  document.getElementById("reviews-amount").value = "";
};

const getFilmFromMouseEvent = (e) => {
  const id = e.target.parentNode.parentNode.childNodes[0].id;
  const name = e.target.parentNode.parentNode.childNodes[0].innerHTML;
  const lengthOfFilm = e.target.parentNode.parentNode.childNodes[1].innerHTML;
  const reviewsAmount = e.target.parentNode.parentNode.childNodes[2].innerHTML;
  const film = new Film(id, name, lengthOfFilm, reviewsAmount);
  return film;
};

const getFilmFromFormFields = () => {
  return {
    filmTitle: document.getElementById("film-title").value,
    lengthOfFilm: document.getElementById("length-of-film").value,
    reviewsAmount: document.getElementById("reviews-amount").value,
  };
};
