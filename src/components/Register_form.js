import GoogleButton from "react-google-button";
import React, { Component } from "react";
import { Row, Col, Button, ButtonGroup, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

class RegisterForm extends Component {
  render() {
    return (
      <div class="register-div">
        &nbsp;&nbsp;&nbsp;&nbsp;Hello, there!
        <br />
        <p class="heading_h2">&nbsp;&nbsp;Get Started</p>
        <br />
        <Container>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="John Snow" />
            </Form.Group>
            <Form.Group controlId="form.Email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="John.snow@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="**********" />
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalCheck"
            >
              <Col sm={{ span: 9, offset: 0 }}>
                <Form.Check label="Remember me" />
              </Col>
              <a class="form_links" href="#">
                Forgot Password?
              </a>
            </Form.Group>
            <Row>
              <Col>
                <ButtonGroup className="d-flex">
                  <Button variant="primary" type="submit" size="lg">
                    Register
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
            <br />
            <Row>
              <Col sm={{ offset: 3 }}>
                <ButtonGroup className="d-flex">
                  <div
                    class="g-signin2"
                    data-width="10"
                    data-height="200"
                    data-longtitle="true"
                  >
                    <GoogleButton
                      type="outline-primary light" // can be light or dark
                      onClick={() => {
                        console.log("Google button clicked");
                      }}
                    />
                  </div>
                </ButtonGroup>
              </Col>
            </Row>
          </Form>
        </Container>
        <br />
        <br />
        <center>
          Already have an account?{" "}
          <a href="#" class="form_links">
            Log in here
          </a>
        </center>
      </div>
    );
  }
}

export default RegisterForm;
