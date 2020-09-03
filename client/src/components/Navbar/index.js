import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, useLocation } from 'react-router-dom';
import LogoutButton from '../LogoutButton';
import LoginButton from '../LoginButton';
import './Navbar.css';

const Navbar = () => {
	const { isAuthenticated } = useAuth0();

	return (
    <nav className="navbar navbar-light">
        <h1 className="navbar-brand" >MakeYourLifeEasy</h1>
        <div style={{ display: "flex", justifyContent: "flex-end"}}>
        <a className="navbar-brand" href="/orders">Orders</a>
        <a className="navbar-brand" href="/profile">Profile</a>
        <div className="justify-content-end" style={{paddingRight: 15}}>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</div></div>
    </nav>
    );
};

export default Navbar;
