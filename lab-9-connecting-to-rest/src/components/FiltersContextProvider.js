import React, { useState } from "react";

export const FiltersContext = React.createContext();

const obj = {
  PRICE_FILTER: -1,
  REVIEWS_FILTER: -1,
  LENGTH_FILTER: -1,
};

export default ({ children }) => {
  const [filtersData, setFiltersData] = useState(obj);
  return (
    <FiltersContext.Provider value={[filtersData, setFiltersData]}>
      {children}
    </FiltersContext.Provider>
  );
};
