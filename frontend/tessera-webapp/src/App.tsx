import { useState } from "react";
import { Link, Outlet, useOutletContext } from "react-router-dom";
import './App.css';
import { Post } from "./DataTypes/Post";
import LogInPage from "./Pages/logInPage";
import RegisterPage from "./Pages/registerPage";


function App() {
  const [posts, setPosts] = useState<Post[]>([])
  const token = localStorage.getItem('username');
  const [register, setRegister] = useState(false);

  function handleRegister() {
    setRegister(true);
  }

  function handleLogOut() {
    localStorage.removeItem('username');
    localStorage.removeItem('userid')
    localStorage.removeItem('isadmin')
    window.location.reload();
  }

  if (!token) {
    if (!register){

      return (
      <div>
        <LogInPage handleRegister={handleRegister} />
      </div>
        )
      }
    else{
      return <RegisterPage/>;
    }
  }

  return (
    <div>
      <h1>Tessera</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/feed">Feed</Link> |{" "}
        <Link to="/profile">Profile</Link>|{" "}
        <button type="button" onClick={handleLogOut}>
          Log Out
        </button>

      </nav>
      <Outlet context={{posts, setPosts}}/>
    </div>
  );
}

type postsContextType = {
  posts: Post[],
  setPosts: (postsArr: Post[]) => void
}

export function usePosts() {
  return useOutletContext<postsContextType>();
}

export default App;
