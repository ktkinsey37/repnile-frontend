import logo from './logo.svg';
import JoblyApi from "./api"
import AppRoutes from './AppRoutes';
import React, { useState, useEffect, createContext } from "react";
import UserContext from './UserContext';
import useLocalStorage from './hooks/useLocalStorage';
import 'bootstrap/dist/css/bootstrap.min.css';
import RepnileApi from './api';
import { useNavigate } from 'react-router-dom';

// import { update } from '../../backend/models/user';


function App() {
  const [currUser, setCurrUser] = useLocalStorage("currUser", undefined);
  // const navigate = useNavigate()
  // const [isLoading, setIsLoading] = useState(true);

  // if (isLoading) {
  //   return <p>Loading &hellip;</p>;
  // }

async function login(userData) {
    let user = await RepnileApi.loginUser(userData);
    setCurrUser(user)
  }

async function logout(){
  setCurrUser(undefined)
  localStorage.clear()
  RepnileApi.logoutUser()
}

  return (
    <UserContext.Provider value = {{user: currUser}}>
    <div className="App">
      <header className="App-header">
          <AppRoutes login={login} logout={logout} />
      </header>
    </div>
    </UserContext.Provider>
  );
}

export default App;
