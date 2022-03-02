import React from "react";
import Footer from '../Components/footer';
import RegisterForm from "../Components/RegisterUser";


export default function RegisterPage() {

    return (
      <main className="registercenter">
        <div>
        <h2>Register</h2>
            <nav>
            <RegisterForm />
            </nav>
        </div>
        <Footer></Footer>
    </main>
    );
  }