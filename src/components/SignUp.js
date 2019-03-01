import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

class SignUp extends Component {
  render() {
    return (
      <React.Fragment>
        <Form>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Email" />
            <Form.Text className="text-muted" />
          </Form.Group>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" />
            <Form.Text className="text-muted" />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <Form.Text className="text-muted" />
          </Form.Group>
          <Form.Group controlId="passwordConfirm">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default SignUp;
