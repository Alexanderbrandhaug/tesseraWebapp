import React, {useState} from "react";
import LogIn from "../Components/logIn";
import Register from "../Components/RegisterUser";


export default function RegisterPage() {

    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Register</h2>
        <div>
          <nav>
          <Register />
          </nav>
        </div>
      </main>
    );
  }