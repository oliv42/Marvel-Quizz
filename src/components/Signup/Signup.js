import React, { useState } from "react";

const Signup = () => {

    const data = {
        pseudo: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [loginData, setLoginData] = useState(data);

    const handleChange = e => {
        switch (e.target.id) {
            case 'pseudo':
                console.log('pseudo la')
                break;
            case 'email':
                console.log('email la')
                break;
            case 'password':
                console.log('password la')
                break;
            case 'confirmPassword':
                console.log('confirmPassword la')
                break;
            default:
                break;
        }
    }
    return (
        <div className="signUpLoginBox">
            <div className="formBoxSignup"></div>
            <div className="formBoxRight">
                <div className="formContent">
                <h2>Inscription</h2>
                    <form>
                        <div className="inputBox">
                            <input type="text" id="pseudo" required onChange={handleChange} />
                            <label htmlFor="pseudo">Pseudo</label>
                        </div>
                        <div className="inputBox">
                            <input type="email" id="email" required onChange={handleChange} />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="inputBox">
                            <input type="password" id="password" required onChange={handleChange} />
                            <label htmlFor="password">Mot de passe</label>
                        </div>
                        <div className="inputBox">
                            <input type="password" id="confirmPassword" required onChange={handleChange} />
                            <label htmlFor="confirmPassword">Confirmé le mot de passe</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
