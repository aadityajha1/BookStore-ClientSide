import React, { useState, useEffect } from "react";
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
  Fab,
  Avatar,
  Typography,
  Chip,
} from "@material-ui/core";
import { Form } from "reactstrap";
import {
  AccountCircle,
  Email,
  Person,
  VpnKey,
  Visibility,
  VisibilityOff,
  Add,
} from "@material-ui/icons";
import { baseUrl } from "../shared/baseUrl";
import { useHistory } from 'react-router-dom';

const Register = (props) => {
  const history = useHistory();
  const [firstname, setfirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [visible, setVisible] = useState(false);
  const [imageUrl, setImgUrl] = useState(false);
  const [imageName, setImageName] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log(image);
    var formData = new FormData();
    formData.append("profileImage", image);
    props.register(
      firstname,
      lastname,
      email,
      username,
      gender,
      password,
      formData,
      imageName
    );
    // console.log(image);
    // console.log(formData);
    // alert(
    //   `Firstname: ${firstname}, Image: ${formData} Lastname: ${lastname}, Username: ${username}, Email: ${email}, gender: ${gender}, password: ${password}`
    // );
      history.push('/users/login');
  };

  const handleChange = (e) => {
    const file = e.target.files[0];

    setImageName(file.name);

    // console.log(data);
    setImage(file);
    // console.log(image);
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      localStorage.setItem("profile-image", reader.result);

      setImgUrl(reader.result);
    });
    reader.readAsDataURL(file);
  };
  useEffect(() => {
    if (localStorage.getItem("profile-image")) {
      setImgUrl(localStorage.getItem("profile-image"));
    }
  }, []);
  return (
    <div className="container">
      <div className="row mb-3">
        <div className="col">
          <h1 className="text-center">Register New Account</h1>
        </div>
      </div>
      <div className="row" style={{ justifyContent: "center" }}>
        <Form className="col-12 col-md-6" onSubmit={handleSubmit}>
          <FormControl fullWidth className="mb-3 " margin="normal">
            <div
              className="col-12 offset-4 "
              style={{ display: "block", justifyContent: "center" }}
            >
              {image ? (
                <div>
                  <Avatar
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                    alt="profile Image"
                    src={imageUrl}
                  />
                  <Chip
                    label="Profile"
                    // avatar={<Avatar alt="Profile Image" src={image} />}
                    color="primary"
                    // icon={imageUrl}
                    onDelete={() => {
                      localStorage.removeItem("profile-image");
                      setImgUrl(null);
                      setImage(null);
                    }}
                  />
                </div>
              ) : (
                <div>
                  <label htmlFor="profile">
                    <input
                      style={{ display: "none" }}
                      id="profile"
                      name="profile"
                      type="file"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                    <Fab color="primary" aria-label="add" component="span">
                      {" "}
                      <Add />{" "}
                    </Fab>
                  </label>
                  <Typography>Upload Profile</Typography>
                </div>
              )}
            </div>
          </FormControl>
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
