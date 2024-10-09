import "./Navbar.css"
import {assets} from "../../assets/assets.ts";

export const Navbar = () => {
    return (
        <div className="navbar">
            <img className="logo" src={assets.logo} alt="logo of company"/>
            <img className="profile" src={assets.profile_image} alt=""/>
        </div>
    )
}