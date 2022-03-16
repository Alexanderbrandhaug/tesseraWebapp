import React, { useEffect, useState } from "react";
import Tally from "../Components/Tally";
import UserTransactionList from "./ProfileComponents/UserTransactionList";

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

  return (
    <div>
      <h2>Profile</h2>
      <h2>ID: {userID} </h2>

      <UserTransactionList userID={userID}/>
    </div>
  );
}