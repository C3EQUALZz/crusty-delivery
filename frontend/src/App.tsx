import {Navbar} from "./components/Navbar/Navbar.tsx";
import {Route, Routes} from "react-router-dom"
import {Home} from "./pages/Home/Home.tsx";
import {Cart} from "./pages/Cart/Cart.tsx"
import {PlaceOrder} from "./pages/PlaceOrder/PlaceOrder.tsx";
import {Footer} from "./components/Footer/Footer.tsx";
import {useState} from "react";
import {LoginPopup} from "./components/LoginPopup/LoginPopup.tsx";

function App() {

    const [showLogin, setShowLogin] = useState<boolean>(false);

    return (
        <div>
            {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
            <div className='app'>
                <Navbar setShowLogin={setShowLogin}/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/order" element={<PlaceOrder/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}

export default App
