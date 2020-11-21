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

const Register = (props) => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [visible, setVisible] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.register(firstname, lastname, email, username, gender, password);
    alert(
      `Firstname: ${firstname} Lastname: ${lastname}, Username: ${username}, Email: ${email}, gender: ${gender}, password: ${password}`
    );
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
              onChange={(e) => setfirstname(e.target.value)}
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
              onChange={(e) => setLastname(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setUsername(e.target.value)}
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
            <RadioGroup
              name="gender"
              onChange={(e) => setGender(e.target.value)}
              id="gender"
              aria-label="gender"
            >
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
              onChange={(e) => setPassword(e.target.value)}
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
            <Button
              className="mr-4"
              type="submit"
              variant="contained"
              color="secondary"
            >
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
