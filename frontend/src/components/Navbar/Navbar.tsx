import React, {Dispatch, SetStateAction} from "react";
import "./Navbar.css"
import {assets} from "../../assets/assets"
import {Link} from "react-router-dom";

interface NavbarProps {
    setShowLogin: Dispatch<SetStateAction<boolean>>;
}

export const Navbar: React.FC<NavbarProps> = ({setShowLogin}) => {

    const [menu, setMenu] = React.useState("home");

    return (
        <div className="navbar">
            <Link to='/'><img src={assets.logo} alt="Logo of Tomato" className="logo"/></Link>
            <ul className="navbar-menu">
            <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
                <a href="#explore-menu" onClick={() => setMenu("menu")}
                   className={menu === "menu" ? "active" : ""}>menu</a>
                <a href="#app-download" onClick={() => setMenu("mobile-app")}
                   className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
                <a href="#footer" onClick={() => setMenu("contact-us")}
                   className={menu === "contact-us" ? "active" : ""}>contact us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt=""/>
                <div className="navbar-search-icon">
                    <Link to="/cart"><img src={assets.basket_icon} alt="Logo of cart" className="search-icon"/></Link>
                    <div className="dot"></div>
                </div>
                <button onClick={() => setShowLogin(true)}>sign in</button>
            </div>
        </div>
    )
}