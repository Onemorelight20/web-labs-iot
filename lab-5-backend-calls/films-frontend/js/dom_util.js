export const editFilmButtonId = "edit-film-button";
export const deleteFilmButtonId = "delete-film-button";

export const dataTable = document.getElementById("films-list");
const helperLinks = `<a href="#" class="btn btn-outline-warning btn-sm" id="${editFilmButtonId}" data-bs-toggle="modal"
data-bs-target="#modal">Edit</a>
<a href="#" class="btn btn-outline-danger btn-sm" id="${deleteFilmButtonId}">Delete</a>`;

export const loadTableData = (items) => {
  clearTableData();

  items.forEach((item) => {
    const rowData = `<tr><td id="${item.id}" >${item.filmTitle}</td><td>${item.lengthOfFilm}</td><td>${item.reviewsAmount}</td><td>${helperLinks}</td></tr>`;
    dataTable.insertAdjacentHTML("beforeend", rowData);
  });
};

const clearTableData = () => {
  while (dataTable.rows.length > 0) {
    dataTable.deleteRow(0);
  }
};
