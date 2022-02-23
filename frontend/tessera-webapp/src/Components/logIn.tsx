import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../Utility/data";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box } from "@mui/material";
import FormControl from '@mui/material/FormControl';

export default function NameForm() {

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

      const navigate = useNavigate();

    const { value:name, bind:bindName, reset:resetName } = useInput('');
    const { value:password, bind:bindPassword, reset:resetPassword } = useInput('');
    const [errorMessage, setErrorMessage] = React.useState("");

    function passwordVisibility() {
      const x = document.getElementById("password")
      if (x?.getAttribute("type") === "password") {
        x.setAttribute("type", "text")
      }
      else {
        x?.setAttribute("type", "password")
      }
    }


    function handleSubmit()  {
        getUser(name).then((result) => {
          if (result === password) {
            let url = "/feed"
            navigate(url)
            resetName();
          }
          else {
            setErrorMessage("wrong username or password");
          }
        })
        resetPassword();
    }

    return (
      
      <Card sx={{ maxWidth: 500 , minHeight: 500, margin: 'auto' }}>
        <CardContent >
        <Typography variant="h4" component="div">
          Login
        </Typography>
      <div>
        <FormControl onSubmit={handleSubmit}>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
            <TextField  required label="username" variant="standard"type="username" {...bindName}/>
            <TextField required type="password" {...bindPassword}  label="password" variant="standard" id="password"/>
            </Box>
          <CardActions>
          <Button variant="outlined" size = "small" color="secondary" onClick={() => {passwordVisibility()}}>Show password</Button>
          <Button variant="contained" size = "small"  onClick={() => {handleSubmit()}}>Submit</Button>
          </CardActions>
          <div>
          {errorMessage && <div>{errorMessage}</div>}
        </div>
        </FormControl>
      </div>
      <Typography variant="h6" component="div" marginTop={10}>
         Don't have an account already?
        </Typography>
        <CardActions>
        <Button size="medium">Register</Button>
      </CardActions>
      </CardContent>
      </Card>
    );
  }