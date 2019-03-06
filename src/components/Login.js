import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import alertify from "alertifyjs";

class Login extends Component {
  state = {
    user: {
      username: "nothing",
      email: "",
      password: ""
    }
  };

  handleChange = e => {
    e.preventDefault;
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      user: { ...this.state.user, [name]: value }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = this.state.user;
    axios
      .post("https://dannapi.herokuapp.com/dann/api/v2/login", data)
      .then(response => {
        let token = response.data.access_token;
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("alert", "show");
        window.location.href = "/";
      })
      .catch(error => {
        const errors = Object.values(error.response.data)[0];
        alertify.error(JSON.stringify(errors));
      });
  };

  render() {
    if (localStorage.getItem("reg")) {
      alertify.success("Signed up successfully");
      localStorage.removeItem("reg");
    }
    return (
      <React.Fragment>
        <Form className="form col-md-4 offset-md-4">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              value={this.state.user.email}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.user.password}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default Login;
