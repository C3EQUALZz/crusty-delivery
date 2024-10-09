import "./Sidebar.css"
import {assets} from "../../assets/assets.ts";
export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-options">
                <div className="sidebar-option">
                    <img src={assets.add_icon} alt=""/>
                    <p>Add items</p>
                </div>
                <div className="sidebar-option">
                    <img src={assets.order_icon} alt=""/>
                    <p>List items</p>
                </div>
                <div className="sidebar-option">
                    <img src={assets.add_icon} alt=""/>
                    <p>Orders</p>
                </div>
            </div>
        </div>
    )
}