import React from "react";
import batamn from "../../images/batman.png";

const centerH2 = {
    textAlign: "center",
    marginTop: "50px   ",
};

const centerImg = {
    display: "top",
    margin: "40px auto",
};

const ErrorPage = () => {
    return (
        <div className="quiz-bg">
            <div className="container">
                <h2 style={centerH2}>Oups cette image n'existe pas</h2>
                <img src={batamn} alt="Error page" style={centerImg} />
            </div>{" "}
        </div>
    );
};

export default ErrorPage;
