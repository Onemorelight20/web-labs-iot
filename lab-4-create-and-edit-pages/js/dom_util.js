export const dataTable = document.getElementById("films-list");

const helperLinks = `<a href="#" class="btn btn-outline-warning btn-sm" id="edit">Edit</a>
<a href="#" class="btn btn-outline-danger btn-sm" id="delete">Delete</a>`;

export const updateListWithExistingTableData = (data) => {
  [...dataTable.rows].forEach((r) => {
    let [filmTitle, lengthOfFilm, reviewsAmount] = [
      ...r.querySelectorAll("td"),
    ].map((td) => td.textContent);
    let film = {
      filmTitle: filmTitle,
      lengthOfFilm: lengthOfFilm,
      reviewsAmount: reviewsAmount,
    };
    data.push(film);
  });
};

function clearTableData() {
  while (dataTable.rows.length > 0) {
    dataTable.deleteRow(0);
  }
}

export const loadTableData = (items) => {
  clearTableData();

  items.forEach((item) => {
    let rowData = `<tr><td>${item.filmTitle}</td><td>${item.lengthOfFilm}</td><td>${item.reviewsAmount}</td><td>${helperLinks}</td></tr>`;
    dataTable.insertAdjacentHTML("beforeend", rowData);
  });
};
