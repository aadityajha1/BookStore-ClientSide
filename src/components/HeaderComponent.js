import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavItem,
  Collapse,
  NavbarToggler,
  Nav,
} from "reactstrap";
import { Button, Menu, Avatar, MenuItem, Fab } from "@material-ui/core";
import { ExitToAppOutlined, Home, List, Favorite } from "@material-ui/icons";
import { baseUrl } from "../shared/baseUrl";
import { NavLink } from "react-router-dom";

const UserAuthenticated = ({ user, logout }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    // console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    logout();
    // localStorage.clear();
  };
  return (
    <div>
      {user ? (
        <div>
          <Fab
            size="small"
            aria-controls="profile-menu"
            aria-haspopup="true"
            edge="start"
            // className="bg-dark"
            aria-label="profile"
            onClick={handleClick}
          >
            <Avatar
              style={{
                // width: "56px",
                // height: "56px",
                objectFit: "cover",
              }}
              alt={user.firstname}
              src={baseUrl + user.image}
            />{" "}
          </Fab>
          <Menu
            id="profile-menu"
            color="primary"
            style={{
              marginTop: "40px",
              // color: "#121212",
              // color: "whitesmoke",
            }}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
            anchorEl={anchorEl}
          >
            <MenuItem>View Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      ) : (
        <NavLink to="/users/login">
          <Button
            variant="contained"
            color="secondary"
            startIcon={<ExitToAppOutlined />}
          >
            Login
          </Button>
        </NavLink>
      )}
    </div>
  );
};

function Header(props) {
  // const [toggleNav, setToggleNav ] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  // const user = props.auth.user.name;

  return (
    <Navbar dark expand="md" color="dark">
      <div className="container">
        <NavbarBrand href="/" className="mr-auto">
          BookHub
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsNavOpen(!isNavOpen)} />
        <Collapse isOpen={isNavOpen} navbar>
          <Nav navbar className="ml-lg-5">
            <NavItem>
              <NavLink className="nav-link" to="/">
                <Home /> Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink className="nav-link" to="/menu">
                <List /> Menu
              </NavLink>
            </NavItem>

            {/* <NavItem>
              <NavLink className="nav-link" to="/addbooks">
                Add Books
              </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink className="nav-link" to="/favourites">
                <Favorite /> Favourites
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto">
            <NavItem>
              <UserAuthenticated user={props.user} logout={props.logout} />
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
}

export default Header;
