import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";
import Cart from "./Cart";
import Nav from "./Nav";


const RouteSwitch = () => {
    return (
        <BrowserRouter>
         <Nav />
            <Routes>
               

                <Route path="/" element={<App />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/Shop" element={<Shop />} />

            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;