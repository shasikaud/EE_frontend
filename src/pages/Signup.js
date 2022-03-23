import { signup, useAuth, logout, login } from "../Firebase";
import { useRef, useState } from "react";


const Signup = () => {

  const [ stateLoading, setStateLoading ] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    setStateLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      console.log(currentUser);
    }
    catch {
      console.log("ERROR SIGNING UP: Login.js");
    }
    setStateLoading(false);
    
  }

  return (
    <div>
      <h1> Logged in user : { currentUser?.email} </h1>
      <input ref={emailRef} placeholder="Email" />
      <input ref={passwordRef} type="password" placeholder="Password" />
      <button onClick={handleSignup} > Sign Up </button>
    </div>
    )
  }
  
export default Signup