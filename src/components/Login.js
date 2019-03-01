import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: ""
    };
  }
  submitForm(e) {
    e.preventDefault();
    console.log(`Email: ${this.state.email}`);
  }
  render() {
    return (
      <React.Fragment>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">Email</Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.submitForm}>
            Submit
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default Login;
