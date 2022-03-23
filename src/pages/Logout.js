import { signup, useAuth, logout, login } from "../Firebase";
import { useRef, useState } from "react";


const Logout = () => {

  const [ stateLoading, setStateLoading ] = useState(false);
  const currentUser = useAuth();

  async function handleLogout() {
    setStateLoading(true);
    try {
      await logout();
      console.log("LOGGING OUT: ",currentUser);
    }
    catch {
      console.log("ERROR LOGGING OUT: Login.js");
    }
    setStateLoading(false);
  }

  return (
    <div>
      <h1> Logged in user : { currentUser?.email} </h1>
      <button disabled={stateLoading || !currentUser} onClick={handleLogout} > Log Out </button>
    </div>
    )
  }
  
export default Logout