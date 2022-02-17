import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
      <div>
        <div>
          {errorMessage && <div>{errorMessage}</div>}
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" {...bindName} />
          </label>
          <label>
            Password:
            <input type="password" {...bindPassword} id="password"/>
          </label>
          <button type="button" onClick={passwordVisibility}>Show password</button>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }