import React from 'react';
import { Nav, NavItem, Navbar, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap';

export default function Login(props) {
    var login = props.login;
    if(login) {
        return (
            <div>
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <NavDropdown eventKey={1} title={ login } id="basic-nav-dropdown">
                                <MenuItem eventKey={1.1} href='/logout'><Glyphicon glyph="log-out" />Logout</MenuItem>
                            </NavDropdown>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight>
                        <NavItem eventKey={1} href='/#/' >Home</NavItem>
                        <MenuItem eventKey={2} href='/#/winboard'>My Winboard</MenuItem>
                    </Nav>
                </Navbar>
            </div>
        )
    } else {
        return  (
            <div>
                <Navbar inverse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href='auth/twitter' >Login</NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}