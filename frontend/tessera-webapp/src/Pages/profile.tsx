import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Tally from "../Components/Tally";
import { getUser } from "../Utility/data";

export default function ProfilePage() {

  const [username, setUsername] = useState(localStorage.getItem("username") ?? "");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function getDescription() {
    getUser(username).then(response => {
      if (response) {
        setDescription(response.data.description)
      } else {
        setErrorMessage("Cannot find user. ")
      }
    })
  } 

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Profile {{username}}</h2>
    </main>
  );
}