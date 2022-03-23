import { signup, useAuth, logout, login } from "../Firebase";
import { useRef, useState } from "react";


const Login = () => {

  const [ stateLoading, setStateLoading ] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      console.log(currentUser);
    }
    catch {
      console.log("ERROR SIGNING UP: Login.js");
    }
    
  }

  async function handleLogin() {
    setStateLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      console.log("LOGGING IN: ", currentUser);
    }
    catch {
      console.log("ERROR LOGGING IN: Login.js");
    }
    setStateLoading(false);
    
  }

  async function handleLogout() {
    try {
      await logout();
      console.log("LOGGING OUT: ",currentUser);
    }
    catch {
      console.log("ERROR LOGGING OUT: Login.js");
    }
  }

  return (
    <div>
      <h1> Logged in user : { currentUser?.email} </h1>
      <input ref={emailRef} placeholder="Email" />
      <input ref={passwordRef} type="password" placeholder="Password" />
      <button disabled={currentUser} onClick={handleLogin} > Log In </button>
    </div>
    )
  }
  
export default Login