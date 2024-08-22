import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Dish from "../pages/Dish"
import EditDish from "../pages/EditDish";
import AddDish from "../pages/AddDish";

export default function AppUserRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dish" element={<Dish />}/>
            <Route path="/edit" element={<EditDish/>}/>
            <Route path="/add" element={<AddDish />} />
        </Routes>
    )
}