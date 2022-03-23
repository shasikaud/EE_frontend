import { useAuth } from "../Firebase";

const Company = () => {

  const isLoggedIn = useAuth();

  return (
    <div> 
      <p> Private page </p>
      { isLoggedIn ? "PRIVATE DATA :: Visible only to logged in user" : null}
    </div>
  )
}

export default Company