import React, { useState } from "react";
import { getUser } from "../Utility/data";


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


    const handleSubmit = (evt: any) => {
        evt.preventDefault();
        getUser(name).then((result) => {
          if (result && result.data.password === password) {
            localStorage.setItem('user', result.data.username);
            resetName();
            window.location.reload();
          }
          else {
            setErrorMessage("Wrong username or password");
          }
        })
        resetPassword();
    }

    return (
      <div className = "loginFormComplete">
        <div className="error">
          {errorMessage && <div>{errorMessage}</div>}
        </div>
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
        </form>
      </div>
    );
  }