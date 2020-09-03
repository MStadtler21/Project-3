import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Auth0ProviderWithHistory from "./auth0-provider-with-history";

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
{/* <Auth0Provider
domain={domain}
clientId={clientId}
redirectUri={window.location.origin}> */}

ReactDOM.render(
    <Auth0ProviderWithHistory>
    <App />
    </Auth0ProviderWithHistory>,
    document.getElementById("root"));
    
    // </Auth0Provider>,