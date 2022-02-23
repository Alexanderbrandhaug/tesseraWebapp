import { Link, Outlet } from "react-router-dom";
import {useState} from 'react';
import './App.css';
import LogInPage from "./Pages/logInPage";

function App() {
  const [token, setToken] = useState("");

  //if (!token) {
  //   return <LogInPage setToken={setToken} />
  //}

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
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
