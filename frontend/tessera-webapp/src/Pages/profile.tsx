import React, { useEffect, useState } from "react";
import UserTransactionList from "./ProfileComponents/UserTransactionList";
import { useSearchParams } from "react-router-dom";
import { getUser } from "../Utility/data";

export default function ProfilePage() {
  const [userID, setUserID] = useState<number>(0)

  /**
   * Retrieves userID from URL
   */
  useEffect(() => {
    const pathArr = location.pathname.split('/');

    if(pathArr.length > 2){
      const userID = location.pathname.split('/')[2];
      let id: number = +userID
      setUserID(id)
    }
  }, [])

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
    <div>
      <h2>Profile</h2>
      <h2>ID: {userID} </h2>

      <UserTransactionList userID={userID}/>
    </div>
  );
}