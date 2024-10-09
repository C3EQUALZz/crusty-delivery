import {Navbar} from "./components/Navbar/Navbar"
import {Sidebar} from "./components/Sidebar/Sidebar.tsx";

export const App = () => {
    return (
        <div>
            <Navbar/>
            <hr />
            <div className="app-content">
                <Sidebar/>
            </div>
        </div>
    )
}