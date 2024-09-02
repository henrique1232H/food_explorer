import { BrowserRouter } from "react-router-dom";
import AuthRoutes from "./auth.routes";
import AppUserRoutes from "./appUser.routes";
import { useAuth } from "../hooks/auth";

export default function Routes() {

    const {user} = useAuth();

    return (
        <BrowserRouter>
            {
                !user ? <AuthRoutes /> : <AppUserRoutes/>
            }
        </BrowserRouter>
    )
}