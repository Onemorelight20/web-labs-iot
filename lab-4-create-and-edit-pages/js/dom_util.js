import { data } from "./app.js";
import { Film } from "./film_model.js";

export let editFilmButtonId = "edit-film-button";
export let deleteFilmButtonId = "delete-film-button";

export const dataTable = document.getElementById("films-list");
const helperLinks = `<a href="#" class="btn btn-outline-warning btn-sm" id="${editFilmButtonId}" data-bs-toggle="modal"
data-bs-target="#modal">Edit</a>
<a href="#" class="btn btn-outline-danger btn-sm" id="${deleteFilmButtonId}">Delete</a>`;

export const updateListWithExistingTableData = (arr) => {
  arr.forEach((r) => {
    let film = new Film(r.filmTitle, r.lengthOfFilm, r.reviewsAmount);
    data.push(film);
  });
  loadTableData(data);
};

export const loadTableData = (items) => {
  clearTableData();

  items.forEach((item) => {
    let rowData = `<tr><td>${item.filmTitle}</td><td>${item.lengthOfFilm}</td><td>${item.reviewsAmount}</td><td>${helperLinks}</td></tr>`;
    dataTable.insertAdjacentHTML("beforeend", rowData);
  });
};

let clearTableData = () => {
  while (dataTable.rows.length > 0) {
    dataTable.deleteRow(0);
  }
};
