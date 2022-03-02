import React from "react";
import image from '../assets/images/logo3.png';
import icon from '../assets/images/ticket.png';
import Footer from '../Components/footer';
import LogIn from "../Components/logIn";

interface LogInPageProps {
  handleRegister: (params: any) => void;

}

export default function LogInPage(props: LogInPageProps) {

  return (
    <main>
      <div className="loginPage">
        <div className="loginLeftColumn">
          <header className="header">
            <h1>Tessera</h1>
          </header>
          <div className="infoBox">
            <h2 className="loginText">Just a ticket away</h2>
            <h5 className="loginText2">The Marketplace for trading tickets near you!</h5>
          </div>
        </div>

        <div className = "loginRightColumn">
          <div className="loginBox">
            <LogIn />
          </div>
        </div>
    </div>
    
    <Footer />
    </main>
  );
}