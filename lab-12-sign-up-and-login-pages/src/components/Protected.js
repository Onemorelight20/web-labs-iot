import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContextProvider";
import { MessageContext } from "./MessageContextProvider";

const Protected = ({ children }) => {
  const [loggedUserMail] = useContext(UserContext);
  const [, setMessage] = useContext(MessageContext);

  if (loggedUserMail == null || loggedUserMail == "") {
    setMessage("Log in to have access to other pages.");
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default Protected;
