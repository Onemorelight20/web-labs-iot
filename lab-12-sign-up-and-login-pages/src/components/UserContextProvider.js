import React, { useState } from "react";

export const UserContext = React.createContext();

export default ({ children }) => {
  const [loggedUserMail, setLoggedUserMail] = useState(
    localStorage.getItem("loggedUserMail")
  );
  return (
    <UserContext.Provider value={[loggedUserMail, setLoggedUserMail]}>
      {children}
    </UserContext.Provider>
  );
};
