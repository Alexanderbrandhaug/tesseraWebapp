import './App.css';
import {Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Tessera</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/feed">Feed</Link> | <Link to="/newpost">New Post</Link> |{" "}
        <Link to="/profile">Profile</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
