import React, { useState } from "react";
import { data } from "./data";


export const ItemsContext = React.createContext();

export default ({children}) => {
    const [filmsData, setFilmsData] = useState(data);
    return <ItemsContext.Provider value={[filmsData, setFilmsData]}>
        {children}
    </ItemsContext.Provider>
}