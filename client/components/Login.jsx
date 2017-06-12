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
                            <a href="#">Pinterest Clone</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight>
                        <NavItem eventKey={1} href='/#/' >Home</NavItem>
                        <NavItem eventKey={2} href='/#/winboard'>My Winboard</NavItem>
                        <NavDropdown eventKey={3} title={ login } id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1} href='/logout'><Glyphicon glyph="log-out" />Logout</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar>
            </div>
        )
    } else {
        return  (
            <div>
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Pinterest Clone</a>
                        </Navbar.Brand>
                    </Navbar.Header>    
                    <Nav pullRight>
                        <NavItem eventKey={1} href='/#/' >Home</NavItem>
                        <NavItem eventKey={2} href='auth/twitter' >Login</NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}