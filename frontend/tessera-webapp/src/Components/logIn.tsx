import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

    const handleSubmit = (evt: any) => {
        evt.preventDefault();
        let url = "/feed"
        navigate(url)
        resetName();
        resetPassword();
    }
    return (
      <form onSubmit={handleSubmit}>
        <tr>
            <label>
              Username:
              <input type="text" {...bindName} />
            </label>
        </tr>
        <tr>
        <label>
          Password:
          <input type="text" {...bindPassword} />
        </label>
        </tr>
        <input type="submit" value="Submit" />
      </form>
    );
  }