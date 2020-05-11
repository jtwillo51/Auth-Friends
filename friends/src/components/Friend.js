import React from "react";

function Friend( props ) {
    console.log("friend: ",props)
  return (
    <div>
      <h2>
        {props.name}, {props.age}
      </h2>
      <p>{props.email}</p>
    </div>
  );
}

export default Friend;
