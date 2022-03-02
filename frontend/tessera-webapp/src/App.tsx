import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import './App.css';
import LogInPage from "./Pages/logInPage";
import RegisterPage from "./Pages/registerPage";


function App() {
  const token = localStorage.getItem('user');
  const [register, setRegister] = useState(false);

  function handleRegister() {
    setRegister(true);
  }

  function handleLogOut() {
    localStorage.removeItem('user');
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
      <Outlet />
    </div>
  );
}

export default App;
