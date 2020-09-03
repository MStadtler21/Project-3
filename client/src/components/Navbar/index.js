import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../LogoutButton";
import LoginButton from "../LoginButton";

const Navbar = () => {
    const AuthNav = () => {
        const { isAuthenticated } = useAuth0();

        return (
            <div className="justify-content-end">
                {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            </div>
        );
    };
}

export default Navbar;