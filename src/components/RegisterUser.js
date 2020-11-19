import React from "react";
import {
  InputLabel,
  FormControl,
  Button,
  InputAdornment,
  Input,
} from "@material-ui/core";
import { Form, Col } from "reactstrap";
import { AccountCircle, Email } from "@material-ui/icons";

const Register = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(JSON.stringify());
  };
  return (
    <div className="container">
      <div className="row mb-5">
        <h1 className="display-4">Register New Account</h1>
      </div>
      <div className="row" style={{ justifyContent: "center" }}>
        <Form className="col-12 col-md-5" onSubmit={handleSubmit}>
          <FormControl fullWidth className="mb-3">
            <InputLabel htmlFor="name"> Name</InputLabel>
            <Input
              label="Name"
              fullWidth
              id="name"
              name="name"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor="email"> Email</InputLabel>
            <Input
              fullWidth
              id="email"
              type="text"
              name="email"
              startAdornment={
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              }
            />
          </FormControl>
        </Form>
      </div>
    </div>
  );
};

export default Register;
