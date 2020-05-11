import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";



class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
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

  login = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post("/login", this.state.credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/protected");
      })
      .catch((err) => console.log("err: ", err));
  };
  render() {
    return (
      <div>
          
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.ChangeHandler}
            placeholder="username"
          />
          <input
            name="password"
            type="text"
            value={this.state.credentials.password}
            onChange={this.ChangeHandler}
            placeholder="password"
          />
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;
