import React, { useRef, useEffect, useState } from "react";

const Landing = () => {
    const refWolverine = useRef(null);
    const [btn, setBtn] = useState(false);
    useEffect(() => {
        refWolverine.current.classList.add("startingImg");
        setTimeout(() => {
            refWolverine.current.classList.remove("startingImg");
            setBtn(true);
        }, 1000);
    }, []);
    const setLeftImg = () => {
        refWolverine.current.classList.add("leftImg");
    }

    const setRightImg = () => {
        refWolverine.current.classList.add("rightImg");
    }
    const clearImg = () => {
        if (refWolverine.current.classList.contains("leftImg")) {
            refWolverine.current.classList.remove("leftImg");
        }

        if (refWolverine.current.classList.contains("rightImg")) {
            refWolverine.current.classList.remove("rightImg");
        }
    }

    const displayBtn = btn && (
        <React.Fragment>
            <div className="leftBox"  onMouseOver={setLeftImg} onMouseOut={clearImg}>
                <button className="btn-welcome">Inscrition</button>
            </div>
            <div className="rightBox" onMouseOver={setRightImg} onMouseOut={clearImg}>
                <button className="btn-welcome">Connexion</button>
            </div>
        </React.Fragment>
    );
    return (
        <main ref={refWolverine} className="welcomePage">
            {displayBtn}
        </main>);
};

export default Landing;
