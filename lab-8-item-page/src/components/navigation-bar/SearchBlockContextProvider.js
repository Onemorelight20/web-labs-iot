import React, { useState } from "react";

export const SearchBlockContext = React.createContext();

export default ({ children }) => {
  const [searchBlockText, setSearchBlockText] = useState("");
  return (
    <SearchBlockContext.Provider value={[searchBlockText, setSearchBlockText]}>
      {children}
    </SearchBlockContext.Provider>
  );
};
