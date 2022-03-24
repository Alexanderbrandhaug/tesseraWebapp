import { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import './App.css';
import { Post } from "./DataTypes/Post";
import LogInPage from "./Pages/logInPage";
import RegisterPage from "./Pages/registerPage";
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@material-ui/core/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';






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
    
    <div >
      <AppBar position="static" style={{ background: '#5899ad' }}>
        <div className="flex-navbar">
         <div className="marketPlaceNavbar">
         <Link href="/feed"  style={{ color: 'white' }} underline="none">Marketplace </Link>
         </div>
         <div className="marketPlaceIcon">
           <LocalActivityOutlinedIcon datatest-id="LocalActivityOutlinedIcon" style={{color: "white", marginRight:"5px"}} fontSize="large">
           </LocalActivityOutlinedIcon>
           </div>
           <div className="navbarProfileTextWrapper">
            <div className = "profileTextNavbar">
            <Link href={"/profile/" + localStorage.getItem("userID")} style={{ color: 'white' }} underline="none"  >Profile </Link>
            </div>  
            <div className="profileNavBarIcon">
            <PermIdentityOutlinedIcon dataset-id="PermIdentityOutlinedIcon" style={{color: "white"}} fontSize="large"></PermIdentityOutlinedIcon>       
          </div>
          </div>
          <div className="logOutBtnAndTextNavbar">Log out
          <LogoutIcon datatest-id="LogoutOutlinedIcon" style={{ color: 'white' }}  onClick={handleLogOut}>
          </LogoutIcon>
          </div>
          </div>
    </AppBar>
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
