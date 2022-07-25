import useAuth from "../utils/AuthHelper";
import {useNavigate} from "react-router-dom";
import React from "react";

function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth?.user) {
    return <p>helloYou are not logged in.</p>;
  }

  return (
    <p>
      Welcome {auth.user}!{" "}
      <button
        onClick={() => {
          auth.signout(() => navigate("/"));
        }}
      >
        Sign out
      </button>
    </p>
  );
}
export default AuthStatus;