import React, { Component } from "react";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default class Login extends Component {
  state = {
    error: {
      status: false,
      message: ""
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    const API_URL = "https://secure-thicket-75424.herokuapp.com/api/v1"

    fetch(`${ API_URL }/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: e.target.username.value,
        password: e.target.password.value
      })
    })
    .then(response => response.json())
    .then(data => {
      if(typeof data.token !== "undefined") {

        localStorage.setItem("token", data.token);
        const url = window.decodeURIComponent(this.props.location.search);
        this.props.history.push("/" + url.split("/")[1]);

      } else {
        this.setState({
          error: {
            status: true,
            message: data.message
          }
        })
      }
    })
    .catch(e => alert(e));
  }

  render() {
    const formStyles = {
      width: 400,
     margin: '50px auto',
    }
    return (
      <React.Fragment>
      <div style={formStyles}>
        <h2>Login</h2>
        <form onSubmit={ this.onSubmit }>
        <TextField
             required
             name="username"
             type="text"
             label="Username"
             fullWidth
           />
           <TextField
              required
              name="password"
              type="password"
              label="Password"
              fullWidth
            />
             { this.state.error.status && <p>{ this.state.error.message }</p>}
            <Button type='submit'  variant='contained'> Login </Button>
        </form>
      </div>
      </React.Fragment>
    );
  }
}
