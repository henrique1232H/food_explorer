import { BrowserRouter } from "react-router-dom";
import AuthRoutes from "./auth.routes";
import AppUserRoutes from "./appUser.routes";
import AppAdmin from "./appAdmin.routes";

export default function Routes() {

    let userExists = true

    return (
        <BrowserRouter>
            {
                userExists ? <AppUserRoutes /> : <AppAdmin/> 
            }            
        </BrowserRouter>
    )
}