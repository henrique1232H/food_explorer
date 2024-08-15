import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Dish from "../pages/Dish"

export default function AppUserRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dish" element={<Dish />}/>
        </Routes>
    )
}