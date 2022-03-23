import { useAuth } from "../Firebase";

const Home = () => {

  const isLoggedIn = useAuth();

  return (
    <div> 
      <p> Visible to public </p>
    </div>
  )
}

export default Home