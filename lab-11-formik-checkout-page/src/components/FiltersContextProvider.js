import React, { useState } from "react";

export const FiltersContext = React.createContext();

export const noFiltersobj = {
  PRICE_FILTER: -1,
  REVIEWS_FILTER: -1,
  LENGTH_FILTER: -1,
};

export const priceFilterCases = [
  [0, 100],
  [101, 1000],
  [1001, 10000],
  [10001, 1000000],
];

export const reviewsFilterCases = [
  [0, 100],
  [101, 1000],
  [1001, 10000],
  [10001, 1000000],
];

export const lengthFilterCases = [
  [0, 60],
  [61, 120],
  [121, 180],
  [180, 1200],
];

export default ({ children }) => {
  const [filtersData, setFiltersData] = useState(noFiltersobj);
  return (
    <FiltersContext.Provider value={[filtersData, setFiltersData]}>
      {children}
    </FiltersContext.Provider>
  );
};
