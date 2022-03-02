import { ContextType, useState } from "react";
import { Link, Outlet, useOutletContext } from "react-router-dom";
import './App.css';
import { Post } from "./DataTypes/Post";
import LogInPage from "./Pages/logInPage";


function App() {
  const [posts, setPosts] = useState<Post[]>([])
  const token = localStorage.getItem('user');
  
  function handleLogOut() {
    localStorage.removeItem('user');
    window.location.reload();
  }

  if (!token) {
    return <LogInPage />
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
