import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavLink,
  NavItem,
  Collapse,
  NavbarToggler,
  Nav,
  NavbarText,
} from "reactstrap";
import { Button, IconButton, Menu, Avatar, MenuItem } from "@material-ui/core";
import { ExitToAppOutlined } from "@material-ui/icons";
import { baseUrl } from "../shared/baseUrl";

function Header(props) {
  // const [toggleNav, setToggleNav ] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  // const user = props.auth.user.name;

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    props.logout();
    // localStorage.clear();
  };

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
              <NavLink className="nav-link" href="/menu">
                Books
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" href="/addbooks">
                Add Books
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto">
            <NavItem>
              {props.auth.user ? (
                <div>
                  <IconButton
                    aria-controls="profile-menu"
                    aria-haspopup="true"
                    edge="start"
                    color="primary"
                    aria-label="profile"
                    onClick={handleClick}
                  >
                    <Avatar
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                      alt={props.auth.user.firstname}
                      src={baseUrl + props.auth.user.image}
                    />{" "}
                  </IconButton>
                  <Menu
                    id="profile-menu"
                    color="primary"
                    style={{
                      marginTop: "50px",
                      // color: "#121212",
                      // color: "whitesmoke",
                    }}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={() => setAnchorEl(null)}
                    anchorEl={anchorEl}
                  >
                    <MenuItem onClick={() => setAnchorEl(null)}>
                      View Profile
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                  {/* <h5 className="d-inline mr-2 text-white">
                    {props.auth.user.username}
                  </h5>
                  <Button
                    onClick={() => {
                      // localStorage.clear();
                      props.logout();
                    }}
                  >
                    Logout
                  </Button> */}
                </div>
              ) : (
                <NavLink href="/users/login">
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<ExitToAppOutlined />}
                  >
                    Login
                  </Button>
                </NavLink>
              )}
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
}

export default Header;
