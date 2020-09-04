import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// https://auth0.com/docs/quickstart/spa/react/01-login
const LoginButton = () => {
    //import useAuth0 hook
    const {loginWithRedirect} = useAuth0();

    return (
        <button 
        //causes a redirect away from the app to auth0
        onClick={() => {loginWithRedirect()}}
        id="qsLoginBtn"
        variant="primary"
        className="btn-margin"
        >
            Log In
        </button>
    );
};

export default LoginButton;