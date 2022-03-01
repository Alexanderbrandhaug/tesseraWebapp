import React from "react";
import LogIn from "../Components/logIn";
import image from '../assets/images/logo3.png';
import icon from '../assets/images/ticket.png';
import Footer from '../Components/footer';


export default function LogInPage() {

  return (
    <main style={{ padding: "1rem 0" }}>
      <div>
      <header className="header">
        <h1>Tessera</h1>
      </header>
      <h2 className="loginText">Just a ticket away</h2>
      {/*<img alt='ticketlogo' src={icon} className="ticketIcon"/>*/}
      <h5 className="loginText2">The Marketplace for trading tickets near you!</h5>
        <nav>
        <LogIn />
        </nav>
      </div>
      <Footer></Footer>
    </main>
  );
}