import React, { Component } from "react";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class Signup extends Component {

onSubmitHandle = (e) => {
  e.preventDefault();

  const API_URL = "https://secure-thicket-75424.herokuapp.com/api/v1"

  fetch(`${ API_URL }/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: e.target.email.value,
      password: e.target.password.value
    })
  })
  .then(response => response.json())
  .then(data => {
    this.props.history.push('/login')
    console.log(data)
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
        <h2>Signup</h2>
          <form onSubmit={ this.onSubmitHandle }>
          <TextField
               required
               name="email"
               label="Email"
               fullWidth
          />
          <TextField
              required
              name="password"
              type="password"
              label="Password"
              fullWidth
          />
          <Button type='submit'  variant='contained'> Sign Up </Button>
        </form>
      </div>
    </React.Fragment>
    );
  }
}
