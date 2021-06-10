import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  Nav,
  Button,
  Container,
  Form,
} from "react-bootstrap";
import "./components.css";

function callLogIn() {}

function LogInCard() {
  return (
    <Container className="pt-3">
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link onSelect="callLogIn" href="#first">
                Log in
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#link">Sign Up</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>

        <Card.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox"></Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default LogInCard;
