import React, { Component } from "react";
import { Button, Form, Col } from "react-bootstrap";
import axios from "axios";

const faker = require("faker");

class SignUp extends Component {
  state = {
    user: {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      password: "",
      phone: faker.phone.phoneNumber("07########")
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
      .post("https://dannapi.herokuapp.com/dann/api/v2/signup", data)
      .then(response => {
        localStorage.setItem("reg", "yes");
        window.location.href = "/login";
      })
      .catch(error => {
        const errors = Object.values(error.response.data);
        alert(JSON.stringify(errors));
      });
  };
  render() {
    return (
      <React.Fragment>
        <Form className="form col-md-4 offset-md-4">
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                name="first_name"
                value={this.state.user.first_name}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="last_name"
                value={this.state.user.last_name}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              value={this.state.user.email}
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted" />
          </Form.Group>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              name="username"
              value={this.state.user.username}
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted" />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.user.password}
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted" />
          </Form.Group>
          <Form.Group controlId="passwordConfirm">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default SignUp;
