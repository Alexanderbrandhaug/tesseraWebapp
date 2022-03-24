import { Box, Button, TextField } from "@mui/material";
import Stack from '@mui/material/Stack';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../Utility/data";

interface LogInProps {
  handleRegister: (params: any) => void;

}

export default function LogIn(props: LogInProps) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = React.useState("");

  const navigate = useNavigate();

  function useInput(initialValue: string){
      const [value, setValue] = useState(initialValue);
      return {
        value,
        setValue,
        reset: () => setValue(""),
        bind: {
          value,
          onChange: (event: any) => {
            setValue(event.target.value);
          }
        }
      };
    };

  function passwordVisibility() {
    const x = document.getElementById("password")
    if (x?.getAttribute("type") === "password") {
      x.setAttribute("type", "text")
    }
    else {
      x?.setAttribute("type", "password")
    }
  }


  const handleSubmit = (evt: any) => {
      evt.preventDefault();
      getUser(name).then((result) => {
        if (result && result.data.password === password) {
          localStorage.setItem('username', result.data.username);
          localStorage.setItem('userID', result.data.id);
          localStorage.setItem('isAdmin', result.data.admin);
          setName('');
          navigate("/feed");
          window.location.reload();
        }
        else {
          setErrorMessage("Wrong username or password");
        }
      }).catch((err) => {
        setErrorMessage("Error loging in " + err.message)
      })
      setPassword('');
  }

    return (
      <div>
        <form onSubmit={handleSubmit} className = "loginForm">
        <div className="loginTitle"> Login</div>
            <TextField type="text" name="username" inputProps={{ style: { background: "white" } }}   value={name} onChange={(e) => setName(e.target.value)} placeholder="Username"/>
            <TextField type="password" name="password" inputProps={{ style: { background: "white" } }} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <Stack spacing={1} direction="row" mt={1}>
          <Button variant="contained" onClick={passwordVisibility} style={{width: 170}}>Show password</Button>
          <Button className="submitButton" variant="contained" type="submit" value="Submit" style={{width: 130}}>Submit</Button>
          </Stack>
          <Box mt={1}>
          <Button variant="contained" onClick={props.handleRegister} style={{width: 300}}>
            Register
          </Button>
          </Box>
          <div className="error">
            {errorMessage && <div>{errorMessage}</div>}
          </div>
        </form>
    </div>
    );
  }