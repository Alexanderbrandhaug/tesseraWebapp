import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../Utility/data";

interface logInProps{
  setToken: (token:string) => void
}


export default function NameForm(props:logInProps) {

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


    const handleSubmit = (evt: any) => {
        evt.preventDefault();
        getUser(name).then((result) => {
          if (result && result.data.password === password) {
            props.setToken(result.data.id);
            resetName();
          }
          else {
            setErrorMessage("Wrong username or password");
          }
        })
        resetPassword();
    }

    return (
      <div>
        <div className="error">
          {errorMessage && <div>{errorMessage}</div>}
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input className="userName" type="text" {...bindName} />
          </label>
          <label className="whole">
            Password:
            <input className="passwordButton" type="password" {...bindPassword} id="password"/>
          </label>
          <button type="button" onClick={passwordVisibility}>Show password</button>
          <input className="submit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }