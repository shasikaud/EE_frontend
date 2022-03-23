import { logout } from "../../../Firebase";
import React from "react";

const LogOutButton = () => {

    async function handleLogout() {
        try {
          await logout();
          console.log("LOGGING OUT");
          //window.location.reload();
          //window.location = window.location;
          document.location.reload(true);
        }
        catch {
          console.log("ERROR LOGGING OUT: Login.js");
        }
    }

    return (
      <button onClick={ () => handleLogout() } > Log Out </button>
    )
  }
  
export default LogOutButton