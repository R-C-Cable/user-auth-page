import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  Nav,
  Button,
  Container,
  Form,
  Tab,
  Row,
  Col,
} from "react-bootstrap";
import "./components.css";

function LogInForm() {
  return (
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
  );
}

function RegisterForm() {
  return (
    <Form>
      <Row>
        <Form.Group as={Col} controlId="firstNameGroup">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="test" placeholder="First Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="lastNameGroup">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="test" placeholder="Last Name" />
        </Form.Group>
      </Row>
      <Form.Group controlId="emailGroup">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="passwordGroup">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="submitGroup"></Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

function LogInCard() {
  return (
    <Container className="pt-3">
      <Card>
        <Card.Body>
          <Tab.Container id="left-tabs-example" defaultActiveKey="signIn">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="signIn">Sign In</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="register">Register</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="signIn">
                    <LogInForm />
                  </Tab.Pane>
                  <Tab.Pane eventKey="register">
                    <RegisterForm />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default LogInCard;
