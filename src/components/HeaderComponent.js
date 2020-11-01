import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavLink, NavItem, Collapse,  NavbarToggler, Nav} from 'reactstrap';

function Header(props) {

    // const [toggleNav, setToggleNav ] = useState(false);
    const [isNavOpen, setIsNavOpen ] = useState(false);

    return(
        <Navbar dark expand='lg' color="primary">
            <div className="container">
                <NavbarBrand href="/" className="mr-auto">BookHub</NavbarBrand>
                <NavbarToggler onClick={() => setIsNavOpen(!isNavOpen)} />
                <Collapse isOpen={isNavOpen} navbar >
                <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link" href="/books">Books</NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    );

}

export default Header;