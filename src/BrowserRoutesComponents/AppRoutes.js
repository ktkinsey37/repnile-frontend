import React, {useContext} from "react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "../AssortedSinglePages/HomePage";
// import RepnileApi from "./api"
import NavBar from "./NavBar";
import AnimalsPage from "../AnimalComponents/AnimalsPage";
import AnimalAddForm from "../AnimalComponents/AnimalAddForm";
import MessagesPage from "../MessagesComponents/MessagesPage";
import ItemsPage from "../ItemComponents/ItemsPage";
import Item from "../ItemComponents/Item";
import Animal from "../AnimalComponents/Animal";
import LoginForm from "../AdminRoutes/LoginForm";
import UserMessageSender from "../MessagesComponents/UserMessageSender"
import MessageThread from "../MessagesComponents/MessageThread";
import { Route, Routes } from "react-router-dom";
import UserContext from "../UserContext";
import AnimalEditForm from "../AnimalComponents/AnimalEditForm";
import TermsOfService from "../AssortedSinglePages/TermsOfService";
import UpcomingEventsPage from "../EventsComponents/EventsPage";
import UpcomingEvent from "../EventsComponents/Event";
import EventAddForm from "../EventsComponents/EventAdd";
import ItemAddForm from "../ItemComponents/ItemAddForm"
import About from "../AssortedSinglePages/About";
import ItemEditForm from "../ItemComponents/ItemEditForm";
import AnimalAddParentage from "../AnimalComponents/AnimalAddParentage";


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
                <Route exact path="/animals/:id/edit" cantFind="/animals" element={<AnimalEditForm />}/>
                <Route exact path="/animals/add" element={<AnimalAddForm />}/>
                <Route exact path="/animals/parentage" element={<AnimalAddParentage />}/>
                <Route exact path="/items" element={<ItemsPage />}/>
                <Route exact path="/items/:id" cantFind="/item" element={<Item />}/>
                <Route exact path="/items/add" element={<ItemAddForm />}/>
                <Route exact path="/items/:id/edit" cantFind="/items" element={<ItemEditForm />}/>
                <Route exact path="/events" element={<UpcomingEventsPage />}/>
                <Route exact path="/events/:id" cantFind="/events" element={<UpcomingEvent />}/>
                <Route exact path="/events/add" element={<EventAddForm />}/>
                <Route exact path="/terms_of_service" element={<TermsOfService/>}/>
                <Route exact path="/about" element={<About/>}/>

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
                <Route exact path="/messages/send" element={<UserMessageSender />}/>
                <Route exact path="/items" element={<ItemsPage />}/>
                <Route exact path="/items/:id" cantFind="/item" element={<Item />}/>
                <Route exact path="/events" element={<UpcomingEventsPage />}/>
                <Route exact path="/events/:id" cantFind="/events" element={<UpcomingEvent />}/>
                <Route exact path="/terms_of_service" element={<TermsOfService/>}/>
                <Route exact path="/about" element={<About/>}/>
                <Route element={<p>Hmmm. I can't seem to find what you want.</p>}/>
            </Routes>
            </main>
            </BrowserRouter>
        );
  }
  
  export default AppRoutes;
  
