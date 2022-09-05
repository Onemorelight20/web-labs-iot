import {
  loadTableData,
  editFilmButtonId,
  deleteFilmButtonId,
} from "./dom_util.js";
import {
  filmForm,
  createFilm,
  prepareEditFilmForm,
  deleteFilmProcessing,
  editFilm
} from "./crud_films.js";
import { getAllFilms } from "./api.js";
import { Film } from "./film_model.js";

export const timeCountForm = document.getElementById("time-count-form");
export const modalFormLabel = document.getElementById("modal-form-label");
export let data = [];

const sortByReviewsSwitch = document.getElementById("sort-by-reviews");
const searchByTitleForm = document.getElementById("search-by-title-form");
const resultOfCountingIdName = "result-of-counting";

const sortByReviews = () => {
  if (sortByReviewsSwitch.checked) {
    const newData = [...data].sort(
      (e1, e2) => e2.reviewsAmount - e1.reviewsAmount
    );
    loadTableData(newData);
  } else {
    loadTableData(data);
  }
};

const countFilmsGeneralLength = () => {
  const length = data.reduce(
    (total, currEl) => total + parseInt(currEl.lengthOfFilm),
    0
  );
  const insertedContent = document.getElementById(resultOfCountingIdName);
  if (insertedContent) {
    insertedContent.parentNode.removeChild(insertedContent);
  }
  const htmlToInsert = `<p id="${resultOfCountingIdName}">You have to spend <strong> ${length} minutes </strong> to watch all of this.</p>`;
  timeCountForm.insertAdjacentHTML("beforeend", htmlToInsert);
};

const filterByTitle = (title) => {
  const newData = [...data].filter((el) => el.filmTitle.indexOf(title) !== -1);
  loadTableData(newData);
};

/* CRUD event listeners */

/* edit and create modal form submition */
filmForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (actionIsEdit()) {
    editFilm();
  } else {
    createFilm();
  }
});

/* prepare edit form or delete a film */
document.getElementById("data-table").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target && e.target.id == editFilmButtonId) {
    prepareEditFilmForm(e);
  } else if (e.target && e.target.id == deleteFilmButtonId) {
    deleteFilmProcessing(e);
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

const actionIsEdit = () => {
  return modalFormLabel.childNodes[1] !== undefined;
};

export const refetchAllFilms = async () => {
  const allFilms = await getAllFilms();
  data = allFilms.map(record => {
    return new Film(record['id'], record['title'], record['length_of_film'], record['reviews_amount'])
  });
  loadTableData(data);
};

refetchAllFilms();