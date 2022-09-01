import {
  updateListWithExistingTableData,
  loadTableData,
  editFilmButtonId,
  deleteFilmButtonId,
} from "./dom_util.js";
import { Film } from "./film_model.js";
import {
  filmForm,
  createFilm,
  prepareEditFilmForm,
  deleteFilm,
  editFilm,
} from "./crud_films.js";

export const timeCountForm = document.getElementById("time-count-form");
export const modalFormLabel = document.getElementById("modal-form-label");
export const data = [];

const sortByReviewsSwitch = document.getElementById("sort-by-reviews");
const searchByTitleForm = document.getElementById("search-by-title-form");
const resultOfCountingIdName = "result-of-counting";

const preloadedData = [
  new Film("Dead poets society", 134, 222),
  new Film("The Shawshank Redemption", 142, 26000000),
  new Film("Requiem for a Dream	", 102, 832000),
];

let sortByReviews = () => {
  if (sortByReviewsSwitch.checked) {
    let newData = [...data].sort(
      (e1, e2) => e2.reviewsAmount - e1.reviewsAmount
    );
    loadTableData(newData);
  } else {
    loadTableData(data);
  }
};

let countFilmsGeneralLength = () => {
  let length = data.reduce(
    (total, currEl) => total + parseInt(currEl.lengthOfFilm),
    0
  );
  var insertedContent = document.getElementById(resultOfCountingIdName);
  if (insertedContent) {
    insertedContent.parentNode.removeChild(insertedContent);
  }
  let htmlToInsert = `<p id="${resultOfCountingIdName}">You have to spend <strong> ${length} minutes </strong> to watch all of this.</p>`;
  timeCountForm.insertAdjacentHTML("beforeend", htmlToInsert);
};

let filterByTitle = (title) => {
  let newData = [...data].filter((el) => el.filmTitle.indexOf(title) !== -1);
  loadTableData(newData);
};

updateListWithExistingTableData(preloadedData);
loadTableData(data);

/* CRUD event listeners */

/* edit and create modal form submition */
filmForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (actionIsEdit()) {
    editFilm(data);
  } else {
    createFilm(data);
  }
});

/* prepare edit form or delete a film */
document.getElementById("data-table").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target && e.target.id == editFilmButtonId) {
    prepareEditFilmForm(data, e);
  } else if (e.target && e.target.id == deleteFilmButtonId) {
    deleteFilm(data, e);
  }
});

sortByReviewsSwitch.addEventListener("change", sortByReviews);
timeCountForm.addEventListener("submit", (e) => {
  e.preventDefault();
  countFilmsGeneralLength();
});

searchByTitleForm.addEventListener("submit", (e) => {
  e.preventDefault();
  filterByTitle(document.getElementById("title-part").value);
});

searchByTitleForm.addEventListener("reset", (e) => {
  e.preventDefault();
  document.getElementById("title-part").value = "";
  loadTableData(data);
});

let actionIsEdit = () => {
  return modalFormLabel.childNodes[1] !== undefined;
};
