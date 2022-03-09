import React, { useState } from "react";
import { Register } from "../DataTypes/Register";
import { createUser, getUser } from "../Utility/data";


export default function RegisterForm() {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [description, setDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    function handleSubmit(evt: any){
      evt.preventDefault();
      const register = new Register(username, password, description);
      createUser(register).then(result => {
      if (result) {
        getUser(username).then(response => {
          if (response) {
            localStorage.setItem('username', response.data.username);
            localStorage.setItem('userid', response.data.userid);
            localStorage.setItem('isadmin', response.data.isadmin);
          }
        })
        setUserName("");
        setPassword("");
        setDescription("");
        window.location.reload();
      }
      else{
        setErrorMessage("Something went wrong, please try again");
      }
      }).catch(err => {
        setErrorMessage("Something went wrong, please try again");
      })
    }
    return (
      <div>
        <div className="error">
          {errorMessage && <div>{errorMessage}</div>}
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input className="userName" type="text" placeholder="Username" name="username" value={username} onChange={e => setUserName(e.target.value)} />
          </label>
          <label className="whole">
            Password:
            <input className="userName" type="password" placeholder="Password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
          </label>
          <label>
            Description:
              <input className="userName"  type="text" placeholder="Description" name="description" value={description} onChange={e => setDescription(e.target.value)} />
          </label>
          <input className="submit" type="submit" value="Submit" />
        </form>
      </div>
    );

}