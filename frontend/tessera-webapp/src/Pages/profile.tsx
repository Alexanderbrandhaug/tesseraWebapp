import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getUser } from "../Utility/data";
import UserTransactionList from "./ProfileComponents/UserTransactionList";

export default function ProfilePage() {
  const location = useLocation();
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

  useEffect(() => {
    getUser(username).then(response => {
      if (response) {
        setDescription(response.data.description)
      }
    })
  }, [])

  return (
    <>
      <div className="profileContainer">
        <div className="profileContent">
          <h1>{username} (ID: {userID})</h1>
          <p className="subHeader">Description</p>
          <p>{description}</p>
        </div>
      </div> 
      <UserTransactionList userID={userID} />
    </>
  );
}