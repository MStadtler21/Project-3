import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./User.css";

const User = () => {
  const { user: { picture, name, email, sub }, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated ? (
      <div className="userProfile">
        <img src={picture} alt={name} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    ) : (
      <div>
        <p>
          Please login to continue...
        </p>
      </div>
    )
  );
};

export default User;