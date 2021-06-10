import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Card, Nav, Button, Container} from "react-bootstrap";
import "./components.css"





function LogInCard() {
  return (
    <Container className="pt-3">
    <Card>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="#first">Log in</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link">Sign Up</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>


      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Sign In</Button>
      </Card.Body>
    </Card>
    </Container>
  );
}

export default LogInCard;
