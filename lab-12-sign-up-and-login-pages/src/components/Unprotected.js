import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContextProvider";
import { MessageContext } from "./MessageContextProvider";

const Unprotected = ({ children }) => {
  const [loggedUserMail, ] = useContext(UserContext);
  const [, setMessage] = useContext(MessageContext);

  if (loggedUserMail != null && loggedUserMail != "") {
    setMessage("Already logged in.");
    return <Navigate to="/" replace />;
  }
  return children;
};
export default Unprotected;
