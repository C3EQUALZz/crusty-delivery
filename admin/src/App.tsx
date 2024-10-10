import {Navbar} from "./components/Navbar/Navbar"
import {Sidebar} from "./components/Sidebar/Sidebar.tsx";
import {Routes, Route} from "react-router-dom";
import {Add} from "./pages/Add/Add.tsx";
import {Orders} from "./pages/Orders/Orders.tsx";
import {List} from "./pages/List/List.tsx";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

export const App = () => {
    return (
        <div>
            <ToastContainer />
            <Navbar/>
            <hr/>
            <div className="app-content">
                <Sidebar/>
                <Routes>
                    <Route path="/add" element={<Add/>}/>
                    <Route path="/list" element={<List/>}/>
                    <Route path="/orders" element={<Orders/>}/>
                </Routes>
            </div>
        </div>
    )
}