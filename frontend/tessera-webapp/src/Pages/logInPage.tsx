import React from "react";
import LogIn from "../Components/logIn";

interface LogInPageProps {
  handleRegister: (params: any) => void;

}

export default function LogInPage(props: LogInPageProps) {

  return (
    <div>
      <div className="loginPage">
        <div className="loginLeftColumn">
          <header className="header">
            <h1>Tessera</h1>
          </header>
          <div className="infoBox">
            <h2 className="loginText">Just a ticket away</h2>
            <h5 className="loginText2">The Marketplace for trading tickets near you!</h5>
            <h5 className="loginText2">Here you can buy and sell any ticket you want. You are garanteed to find an event to suit your likes! When you buy a ticket at Tessera, you can always trust that it is genuine and that you get the best available seat that is available at this time. </h5>
          </div>
        </div>

        <div className = "loginRightColumn">
            <LogIn handleRegister={props.handleRegister}/>
        </div>
    </div>
    <footer className="footer">
        <p className="footerText">© 2022</p>
      </footer>
    </div>
  );
}