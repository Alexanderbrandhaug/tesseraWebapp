import { useState } from "react";
import React from "react";
import LogIn from "../Components/logIn";

export default function LogInPage() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <div>
        <nav>
        <LogIn />
        </nav>
      </div>
    </main>
  );
}