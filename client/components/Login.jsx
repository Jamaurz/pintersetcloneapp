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
                            <a href="#">{ login }</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight>
                        <NavItem eventKey={1} href='/#/' >Home</NavItem>
                        <NavItem eventKey={2} href='/#/winboard'>My Winboard</NavItem>
                        <NavItem eventKey={3} href='/logout'><Glyphicon glyph="log-out" />Logout</NavItem>
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