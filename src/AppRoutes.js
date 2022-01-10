import React, {useContext} from "react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
// import RepnileApi from "./api"
import NavBar from "./NavBar";
import AnimalsPage from "./AnimalComponents/AnimalsPage";
import AnimalAddForm from "./AnimalComponents/AnimalAddForm";
import MessagesPage from "./MessagesComponents/MessagesPage";
import ItemsPage from "./ItemComponents/ItemsPage";
import Item from "./ItemComponents/Item";
import Animal from "./AnimalComponents/Animal";
import LoginForm from "./AdminRoutes/LoginForm";
import MessageThread from "./MessagesComponents/MessageThread";
import { Route, Routes } from "react-router-dom";
import UserContext from "./UserContext";


function AppRoutes({login, logout}) {

    const user = useContext(UserContext)

    console.log(user, "this is user in approutes")

    if (user.username == "test"){
        return (
            <BrowserRouter>
            <NavBar logout={logout} />
            <main>
            <Routes>
                <Route exact path="/" element={<HomePage />}/>
                <Route exact path="/messages" element={<MessagesPage />}/>
                <Route exact path="/messages/:id" cantFind="/messages" element={<MessageThread />}/>
                <Route exact path="/animals" element={<AnimalsPage />}/>
                <Route exact path="/animals/:id" cantFind="/animals" element={<Animal />}/>
                <Route exact path="/animals/add" element={<AnimalAddForm />}/>
                <Route exact path="/item" element={<ItemsPage />}/>
                <Route exact path="/items/:id" cantFind="/item" element={<Item />}/>
                <Route element={<p>Hmmm. I can't seem to find what you want.</p>}/>
            </Routes>
            </main>
            </BrowserRouter>
        )};

        return (
            <BrowserRouter>
            <NavBar />
            <main>
            <Routes>
                <Route exact path="/" element={<HomePage />}/>
                <Route exact path="/login" element={<LoginForm login={login}/>}/>
                <Route exact path="/animals" element={<AnimalsPage />}/>
                <Route exact path="/animals/:id" cantFind="/animals" element={<Animal />}/>
                <Route exact path="/item" element={<ItemsPage />}/>
                <Route exact path="/items/:id" cantFind="/item" element={<Item />}/>
                <Route element={<p>Hmmm. I can't seem to find what you want.</p>}/>
            </Routes>
            </main>
            </BrowserRouter>
        );
  }
  
  export default AppRoutes;
  
