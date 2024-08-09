import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import SignUp from "../pages/SignUp";

export default function AppUserRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}