import "./LoginPopup.css"
import React, {Dispatch, SetStateAction, useState} from "react";
import {assets} from "../../assets/assets.ts";

interface LoginPopupProps {
    setShowLogin: Dispatch<SetStateAction<boolean>>;
}

export const LoginPopup: React.FC<LoginPopupProps> = ({setShowLogin}) => {

    const [currentState, setCurrentState] = useState<string>("Sign Up");

    return (
        <div className="login-popup">
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close form"/>
                </div>
                <div className="login-popup-inputs">
                    {currentState === "Login" ? <></> : <input type="text" placeholder='Your name' required/>}
                    <input type="text" placeholder='Your email' required/>
                    <input type="password" placeholder='Your password' required/>
                </div>
                <button>{currentState === "Sign Up" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required/>
                    <p>By continuing, I agree to the terms of use and privacy policy. </p>
                </div>
                {
                    currentState === "Login"
                    ? <p>Create a new account? <span onClick={() => setCurrentState("Sign Up")}>Click here</span></p>
                    : <p>Already have an account? <span onClick={() => setCurrentState("Login")}>Login here</span></p>
                }
            </form>
        </div>
    )
}