import "./Sidebar.css"
import {assets} from "../../assets/assets.ts";
import {NavLink} from "react-router-dom";

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-options">
                <NavLink to="/add" className="sidebar-option">
                    <img src={assets.add_icon} alt="image for button 'add items'"/>
                    <p>Add items</p>
                </NavLink>
                <NavLink to="/list" className="sidebar-option">
                    <img src={assets.order_icon} alt="image for button 'list items'"/>
                    <p>List items</p>
                </NavLink>
                <NavLink to="/orders" className="sidebar-option">
                    <img src={assets.add_icon} alt="image for button 'orders'"/>
                    <p>Orders</p>
                </NavLink>
            </div>
        </div>
    )
}