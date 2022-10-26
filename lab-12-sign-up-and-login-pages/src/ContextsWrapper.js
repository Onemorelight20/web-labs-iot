import React from "react";
import ItemsContextProvider from "./components/ItemsContextProvider";
import UserContextProvider from "./components/UserContextProvider";
import MessageContextProvider from "./components/MessageContextProvider";
import FiltersContextProvider from "./components/FiltersContextProvider";
import SearchBlockContextProvider from "./components/navigation-bar/SearchBlockContextProvider";

export const ContextsWrapper = ({ children }) => {
  return (
    <>
      <UserContextProvider>
        <MessageContextProvider>
          <ItemsContextProvider>
            <FiltersContextProvider>
              <SearchBlockContextProvider>
                {children}
              </SearchBlockContextProvider>
            </FiltersContextProvider>
          </ItemsContextProvider>
        </MessageContextProvider>
      </UserContextProvider>
    </>
  );
};
