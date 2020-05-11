import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

class NewFriendForm extends React.Component {
  state = {
    credentials: {
      id: Date.now(),
      name: "",
      age: "",
      email: "",
    },
  };

  ChangeHandler = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  PostFriend = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post("/friends", this.state.credentials)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log("newPerson err: ", err));
  };

  render() {
    return (
      <form onSubmit={this.PostFriend}>
        <input
          type="text"
          name="name"
          value={this.state.credentials.name}
          onChange={this.ChangeHandler}
          placeholder="Name"
        />
        <input
          type="text"
          name="age"
          value={this.state.credentials.age}
          onChange={this.ChangeHandler}
          placeholder="Age"
        />
        <input
          type="text"
          name="email"
          value={this.state.credentials.email}
          onChange={this.ChangeHandler}
          placeholder="Email"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default NewFriendForm;