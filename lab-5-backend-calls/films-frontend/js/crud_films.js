import { Film } from "./film_model.js";
import { loadTableData } from "./dom_util.js";
import { timeCountForm, modalFormLabel } from "./app.js";

export const filmForm = document.getElementById("film-form");
export const addFilmButton = document.getElementById("add-film-button");
const filmAddedInfoId = "film-added-info";

export const createFilm = (data) => {
  let film = getFilmFromFormFields();
  clearFormFields();
  data.push(film);
  loadTableData(data);
  document.getElementById("modal-close-btn").click();

  var insertedContent = document.getElementById(filmAddedInfoId);
  if (insertedContent) {
    insertedContent.parentNode.removeChild(insertedContent);
  }
  let htmlToInsert = `<p id="${filmAddedInfoId}">Film <strong>${film.filmTitle}</strong> was successfully added</p>`;
  timeCountForm.insertAdjacentHTML("afterend", htmlToInsert);
};

export const prepareEditFilmForm = (data, e) => {
  modalFormLabel.innerHTML = "Edit a film";
  let filmToEdit = getFilmFromMouseEvent(e);
  document.getElementById("film-title").value = filmToEdit.filmTitle;
  document.getElementById("length-of-film").value = filmToEdit.lengthOfFilm;
  document.getElementById("reviews-amount").value = filmToEdit.reviewsAmount;
  let hiddenEl = document.createElement("div");
  hiddenEl.setAttribute("id", `${indexOfFilm(data, filmToEdit)}`);
  modalFormLabel.appendChild(hiddenEl);
};

export const deleteFilm = (data, e) => {
  if (confirm("are you sure?")) {
    let filmToDelete = getFilmFromMouseEvent(e);
    const index = indexOfFilm(data, filmToDelete);
    if (index > -1) {
      data.splice(index, 1);
    }
    loadTableData(data);
  }
};

export const editFilm = (data) => {
  let id = modalFormLabel.childNodes[1].id;
  let film = getFilmFromFormFields();
  data[id] = film;
  loadTableData(data);
  clearFormFields();
  document.getElementById("modal-close-btn").click();
};

let clearFormFields = () => {
  document.getElementById("film-title").value = "";
  document.getElementById("length-of-film").value = "";
  document.getElementById("reviews-amount").value = "";
};

let getFilmFromMouseEvent = (e) => {
  let name = e.target.parentNode.parentNode.childNodes[0].innerHTML;
  let lengthOfFilm = e.target.parentNode.parentNode.childNodes[1].innerHTML;
  let reviewsAmount = e.target.parentNode.parentNode.childNodes[2].innerHTML;
  let film = new Film(name, lengthOfFilm, reviewsAmount);
  return film;
};

let indexOfFilm = (arr, obj) => {
  for (var i = 0; i < arr.length; i++) {
    if (
      arr[i].filmTitle == obj.filmTitle &&
      arr[i].lengthOfFilm == obj.lengthOfFilm &&
      arr[i].reviewsAmount == obj.reviewsAmount
    ) {
      return i;
    }
  }
  return -1;
};

let getFilmFromFormFields = () => {
  return new Film(
    document.getElementById("film-title").value,
    document.getElementById("length-of-film").value,
    document.getElementById("reviews-amount").value
  );
};
