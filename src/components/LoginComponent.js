import React, { useState } from "react";
import { Label, Form, Input, FormGroup, Col, Row, Button } from "reactstrap";
// import { Control, Form } from "react-redux-form";
// import { Link } from "@material-ui/core";
import { Link } from "react-router-dom";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    alert(`Username: ${username} and Password: ${password}`);
    props.login(username, password);
  };
  return (
    <div className="container">
      <div className="row mb-5" style={{ justifyContent: "center" }}>
        <h2 className="text-center">Login Page</h2>
      </div>
      <div className="row" style={{ justifyContent: "center" }}>
        <Form className="col-8" onSubmit={handleSubmit}>
          <FormGroup>
            <Row className="mb-2">
              <Label md={2} for="username">
                Username
              </Label>
              <Col md={9}>
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  id="username"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row className="mb-2">
              <Label md={2} for="password">
                Password
              </Label>
              <Col md={9}>
                <Input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  id="passowrd"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col md={4} className="offset-md-2">
                <Button color="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col className="col-12 offset-md-2">
                <p className="mr-2 d-inline">Don't have an account? </p>{" "}
                <Link to="/users/register">
                  <a className="d-inline streched-link h6">Sign Up</a>{" "}
                </Link>
              </Col>
            </Row>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}

export default Login;
