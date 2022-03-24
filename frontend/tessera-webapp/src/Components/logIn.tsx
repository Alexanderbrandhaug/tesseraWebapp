import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../Utility/data";

interface LogInProps {
  handleRegister: (params: any) => void;

}

export default function LogIn(props: LogInProps) {

  const { value:name, bind:bindName, reset:resetName } = useInput('');
  const { value:password, bind:bindPassword, reset:resetPassword } = useInput('');
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
          resetName();
          navigate("/feed");
          window.location.reload();
        }
        else {
          setErrorMessage("Wrong username or password");
        }
      }).catch((err) => {
        setErrorMessage("Error loging in " + err.message)
      })
      resetPassword();
  }

    return (
      <div>
        <form onSubmit={handleSubmit} className = "loginForm">
        <div className="loginTitle"> Login</div>
          <label>
            Username:
            <input className="userName" type="text" {...bindName} />
          </label>
          <label className="whole">
            Password:
            <input className="passwordButton" type="password" {...bindPassword} id="password"/>
          </label>
          <button type="button"className ="showPwButton" onClick={passwordVisibility}>Show password</button>
          <input className="submit" type="submit" value="Submit" />
          <button className="registerclass" type="button" onClick={props.handleRegister}>
            Register
          </button>
          <div className="error">
            {errorMessage && <div>{errorMessage}</div>}
          </div>
        </form>
    </div>
    );
  }