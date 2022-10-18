import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/*" element={<ErrorPage />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
};

export default App;
