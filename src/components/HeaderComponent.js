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
  Button,
} from "reactstrap";
import Cookies from "js-cookie";
function Header(props) {
  // const [toggleNav, setToggleNav ] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const user = localStorage.getItem("user");
  return (
    <Navbar dark expand="lg" color="dark">
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
              {localStorage.getItem("user") ? (
                <div>
                  <h5 className="d-inline mr-2 text-white">{user}</h5>
                  <Button
                    onClick={() => {
                      localStorage.clear();
                      Cookies.remove("token");
                    }}
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <NavLink href="/users/login">
                  <Button>Login</Button>
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
