import {
  updateListWithExistingTableData,
  loadTableData
} from "./dom_util.js";

const sortByReviewsSwitch = document.querySelector("#sort-by-reviews");
const timeCountForm = document.getElementById("timeCountForm");
const searchByTitleForm = document.getElementById("search-by-title-form");
const resultOfCountingIdName = "resultOfCounting";

let data = [];

updateListWithExistingTableData(data);
loadTableData(data);

function sortByReviews() {
  if (sortByReviewsSwitch.checked) {
    let newData = [...data].sort(
      (e1, e2) => e2.reviewsAmount - e1.reviewsAmount
    );
    loadTableData(newData);
  } else {
    loadTableData(data);
  }
}

function countFilmsGeneralLength() {
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
}

function filterByTitle(title) {
  let newData = [...data].filter((el) => el.filmTitle.indexOf(title) !== -1);
  loadTableData(newData);
}

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
  loadTableData(data);
});
