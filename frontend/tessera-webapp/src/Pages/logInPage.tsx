import React from "react";
import LogIn from "../Components/logIn";

interface LogInPageProps {
  setToken: (token: string) => void
}

export default function LogInPage(props: LogInPageProps) {

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Log in</h2>
      <div>
        <nav>
        <LogIn setToken={props.setToken} />
        </nav>
      </div>
    </main>
  );
}