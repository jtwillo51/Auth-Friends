import React, { useState, useEffect } from "react";


import Friend from "./Friend";
import { axiosWithAuth } from "../utils/axiosWithAuth";

function FriendsList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        
        setList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <div>
      {list.map((person) => {
          console.log("person: ", person)
         return <Friend name = {person.name} age = {person.age} email = {person.email} />;
      })}
    </div>
  );
}
export default FriendsList;
