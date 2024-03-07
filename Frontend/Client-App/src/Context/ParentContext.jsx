import React, { createContext, useState } from "react";

export const AppContext = createContext();

const ParentContext = ({ children }) => {
  const [data, setData] = useState([]);
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  console.log("local", localStorage.setItem("login", login));
  console.log("local", localStorage.getItem("login"));

  const setCookies = (name, value, expiry) => {
    const date = new Date();
    date.setTime(date.getTime() + expiry * 24 * 60 * 60 * 1000);
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  };

  return (
    <AppContext.Provider value={{ data, setData, login, setLogin, setCookies }}>
      {children}
    </AppContext.Provider>
  );
};

export default ParentContext;
