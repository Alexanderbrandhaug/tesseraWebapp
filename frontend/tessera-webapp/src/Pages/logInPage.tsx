import React from "react";
import image from '../assets/images/logo3.png';
import icon from '../assets/images/ticket.png';
import Footer from '../Components/footer';
import LogIn from "../Components/logIn";


export default function LogInPage() {

  return (
    <main style={{ padding: "1rem 0" }}>
      <div>
      <img alt='logo' src={image} className="loginLogo"/>
      <h2 className="loginText">Just a ticket away</h2>
      <img alt='ticketlogo' src={icon} className="ticketIcon"/>
      <h5 className="loginText2">The Marketplace for trading tickets near you!</h5>
        <nav>
        <LogIn />
        </nav>
      </div>
      <Footer></Footer>
    </main>
  );
}