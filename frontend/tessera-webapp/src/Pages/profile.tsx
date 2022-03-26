import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { User } from "../DataTypes/User";
import { getUser, getUserByID } from "../Utility/data";
import UserTransactionList from "./ProfileComponents/UserTransactionList";

export default function ProfilePage() {
  const location = useLocation();
  const [userID, setUserID] = useState<number>(0)
  const [user, setUser] = useState<User | undefined>()
  const [errorMessage, setErrorMessage] = useState<string>("");

  const isLoggedInUser: boolean = +(localStorage.getItem("userID") ?? 0) === userID;

  /**
   * @effects Retrieves userID from URL
   */
  useEffect(() => {
    const pathArr = location.pathname.split('/');

    if(pathArr.length > 2){
      const userID = location.pathname.split('/')[2];
      let id: number = +userID;
      setUserID(id)
    }
  }, [])

  useEffect(() => {
    loadUser();
  }, [userID])

  /**
   * @effects Loads user with user id in url. If couldnt find or other error
   * sets error message indicating error.
   */
  function loadUser(){
    console.log("Attempting to update displayed user")
    getUserByID(userID).then((u: User) => {
      console.log("Done retrieving from backend!");
      if(u) {
        console.log("Found user " + u.username)
        setUser(u);
      }
      setErrorMessage("")
    }).catch( err => {
      setErrorMessage("Could not retrieve requested user (" + err + ")")
    });
  }

  if(errorMessage !== "" && user !== undefined) {
    setErrorMessage("")
  }

  return (
    <>
      <div className="profileContainer">
        {errorMessage !== "" ? <p className="error">{errorMessage}</p> : <></>}
        <div className="profileContent">
          <h1>{user?.username} (ID: {user?.userID})</h1>
          <p className="subHeader">Description</p>
          <p>{user?.description}</p>
        </div>
      </div> 
      <UserTransactionList userID={userID} hideTransactions={!isLoggedInUser}/>
    </>
  );
}