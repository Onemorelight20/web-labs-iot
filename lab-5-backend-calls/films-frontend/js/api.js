const BASE_URL = "http://127.0.0.1:3000/api/v1";
const RESOURSE_URL = `${BASE_URL}/films`;

const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
  try {
    const reqParams = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) {
      reqParams.body = JSON.stringify(body);
    }

    return await fetch(`${RESOURSE_URL}${urlPath}`, reqParams);
  } catch (error) {
    console.error("HTTP ERROR: ", error);
  }
};

export const getAllFilms = async () => {
  const rawResponse = await baseRequest({ method: "GET" });
  return await rawResponse.json();
};

export const postFilm = (body) =>
  baseRequest({ method: "POST", body: processFilm(body) });

export const updateFilm = (id, body) =>
  baseRequest({ urlPath: `/${id}`, method: "PATCH", body: processFilm(body) });

export const deleteFilm = (id) =>
  baseRequest({ urlPath: `/${id}`, method: "DELETE" });

const processFilm = (filmJSConvention) => {
  return {
    title: filmJSConvention.filmTitle,
    length_of_film: filmJSConvention.lengthOfFilm,
    reviews_amount: filmJSConvention.reviewsAmount,
  };
};
