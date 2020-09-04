import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, useLocation } from 'react-router-dom';
import LogoutButton from '../LogoutButton';
import LoginButton from '../LoginButton';
import './Navbar.css';

const Navbar = () => {
    const { isAuthenticated } = useAuth0();
    const location = useLocation();

	return (
    <nav className="navbar navbar-light">
        <Link to="/" className="h1 navbar-brand" >Heard</Link>
        <div style={{ display: "flex", justifyContent: "flex-end"}}>
        <Link to="/orders" className={location.pathname="/orders" ? "navbar-brand active" : "navbar brand"}>Orders</Link>
        <Link to="/profile" className={location.pathname="/profile" ? "navbar-brand active" : "navbar brand"}>Profile</Link>
        <div className="justify-content-end" style={{paddingRight: 15}}>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</div></div>
    </nav>
    );
};

export default Navbar;
