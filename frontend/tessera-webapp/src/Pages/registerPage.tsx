import React from "react";
import Register from "../Components/RegisterUser";
import Footer from '../Components/footer';


export default function RegisterPage() {

    return (
      <main className="registercenter">
        <div>
        <h2>Register</h2>
            <nav>
            <Register />
            </nav>
        </div>
        <Footer></Footer>
    </main>
    );
  }