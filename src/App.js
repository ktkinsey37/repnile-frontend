import AppRoutes from './BrowserRoutesComponents/AppRoutes';
import React from "react";
import UserContext from './UserContext';
import useLocalStorage from './hooks/useLocalStorage';
import 'bootstrap/dist/css/bootstrap.min.css';
import RepnileApi from './api';
import "./App.css"

// import { update } from '../../backend/models/user';


function App() {
  const [currUser, setCurrUser] = useLocalStorage("currUser", undefined);
  const [currToken, setCurrToken] = useLocalStorage("currToken", undefined);
  // const navigate = useNavigate()
  // const [isLoading, setIsLoading] = useState(true);

  // if (isLoading) {
  //   return <p>Loading &hellip;</p>;
  // }
  if (currToken) RepnileApi.addToken(currToken);

async function login(userData) {
    let user = await RepnileApi.loginUser(userData);
    setCurrUser(user.username)
    setCurrToken(user.token)
  }

async function logout(){
  setCurrUser(undefined)
  setCurrToken(undefined)
  localStorage.clear()
  RepnileApi.logoutUser()
}

  return (
    <UserContext.Provider value = {{username: currUser, token: currToken}}>
    <div className="Repnile">
      <header className="App-header">
          <AppRoutes login={login} logout={logout} />
      </header>
    </div>
    </UserContext.Provider>
  );
}

export default App;
