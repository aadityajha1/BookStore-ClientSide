import React, { useState } from "react";
import {
  InputLabel,
  FormControl,
  Button,
  InputAdornment,
  Input,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  IconButton,
} from "@material-ui/core";
import { Form } from "reactstrap";
import {
  AccountCircle,
  Email,
  Person,
  VpnKey,
  Visibility,
  VisibilityOff,
} from "@material-ui/icons";

const Register = () => {
  const [visible, setVisible] = useState(false);
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
        <Form className="col-12 col-md-6" onSubmit={handleSubmit}>
          <FormControl fullWidth className="mb-3 col-md-6 ">
            <InputLabel htmlFor="firstname">First Name</InputLabel>
            <Input
              fullWidth
              id="firstname"
              name="firstname"
              startAdornment={
                <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl fullWidth className="mb-3 col-md-6 ">
            <InputLabel htmlFor="name">Last Name</InputLabel>
            <Input
              fullWidth
              id="lastname"
              name="lastname"
              startAdornment={
                <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl fullWidth className="mb-3">
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
          <FormControl fullWidth className="mb-3">
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input
              fullWidth
              id="username"
              name="username"
              type="text"
              startAdornment={
                <InputAdornment position="start">
                  {" "}
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl component="fieldset" className="mb-3">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup name="gender" id="gender" aria-label="gender">
              <FormControlLabel
                style={{ display: "inline" }}
                value="male"
                control={<Radio />}
                label="Male"
              />
              <FormControlLabel
                style={{ display: "inline" }}
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                style={{ display: "inline" }}
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
          <FormControl fullWidth className="mb-3">
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              fullWidth
              type={visible ? "text" : "password"}
              name="password"
              id="password"
              startAdornment={
                <InputAdornment position="start">
                  <VpnKey />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => setVisible(!visible)}>
                    {visible ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <div className="row mb-5">
            <Button className="mr-4" variant="contained" color="primary">
              {" "}
              Submit
            </Button>
            <Button className="d-inline" variant="contained">
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
