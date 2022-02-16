import React from "react";
import { useState } from "react";


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

    const { value:firstName, bind:bindFirstName, reset:resetFirstName } = useInput('');
    const { value:password, bind:bindPassword, reset:resetPassword } = useInput('');
    
    const handleSubmit = (evt: any) => {
        evt.preventDefault();
        alert(`Submitting Name ${firstName} ${password}`);
        resetFirstName();
        resetPassword();
    }
    return (
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" {...bindFirstName} />
        </label>
        <label>
          Password:
          <input type="text" {...bindPassword} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }