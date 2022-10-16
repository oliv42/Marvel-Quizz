import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";
import Welcome from "../Welcome/Welcome";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import ErrorPage from "../ErrorPage/ErrorPage";
import "../../App.css";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/"> 
                    <Landing />
                </Route>
                <Route path="/welcome">
                    <Welcome />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
                <Route>
                    <ErrorPage />
                </Route> 
            </Switch>

            <Footer />
        </BrowserRouter>
    );  
};

export default App;
