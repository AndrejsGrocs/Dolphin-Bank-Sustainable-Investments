import React from "react";
import MainRouter from "./hoc/MainRouter";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext({
  username: "",
  loggedIn: false,
  handleLogin: () => {},
});

export default function App() {

  const [user, setUser] = useState({});
  const [recipient, setRecipient] = useState({});
  const [balance, setBalance] = useState();

  const [loggedIn, setLoggedIn] = useState("");

 

  const handleLogin = (_user) => {
    if (_user) {
      setUser(_user);
      setLoggedIn(true);
      setBalance
    } else {
      setUser("");
      setLoggedIn(false);
    }

  };

  return (
    <AppContext.Provider
      value={{ handleLogin, loggedIn, user, balance, setBalance }}
    >
      <div>
        <MainRouter />
      </div>
    </AppContext.Provider>
  );
}

