import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavLink, NavItem, Collapse,  NavbarToggler, Nav} from 'reactstrap';

function Header(props) {

    // const [toggleNav, setToggleNav ] = useState(false);
    const [isNavOpen, setIsNavOpen ] = useState(false);

    return(
        <Navbar dark expand='lg' color="dark">
            <div className="container">
                <NavbarBrand href="/" className="mr-auto">BookHub</NavbarBrand>
                <NavbarToggler onClick={() => setIsNavOpen(!isNavOpen)} />
                <Collapse isOpen={isNavOpen} navbar >
                <Nav navbar className="ml-lg-5">
                    <NavItem>
                        <NavLink className="nav-link" href="/menu">Books</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" href="/addbooks">Add Books</NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    );

}

export default Header;