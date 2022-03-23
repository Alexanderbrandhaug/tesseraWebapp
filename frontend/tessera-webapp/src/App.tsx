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
      <AppBar position="static" style={{ background: '#5899ad' , paddingTop:'25px'}}>
      <Typography
            variant="h2"
            noWrap
            component="div"
            sx={{ mr: 2, mb:-8, paddingBottom:2, ml:10, display: { xs: 'none', md: 'flex' } }}
          >
            Tessera
          </Typography>
          <Box ml={70} mb={9}>
            <Link href="/feed"  style={{ color: 'white' , fontSize: '33px' }} underline="none">Marketplace </Link>
            </Box>
            <Box ml={120} mt={-15}>
            <Link href="/profile" style={{ color: 'white', fontSize: '33px' }} underline="none"  >Profile </Link>
            </Box>
          <Box ml={180} mt={-8}>
          <div>Log out</div>
          <LogoutIcon datatest-id="LogoutOutlinedIcon" style={{ color: 'white' }} fontSize="large" onClick={handleLogOut}>
          </LogoutIcon>
          </Box>     
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
