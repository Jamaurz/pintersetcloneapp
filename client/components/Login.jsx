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
                        <NavItem eventKey={2} href='/#/edit' >edit</NavItem>
                        <NavDropdown eventKey={3} title={<Glyphicon glyph="menu-hamburger" />} id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1} href='/#/winboard'>My Winboard</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.2} href='/logout'><Glyphicon glyph="log-out" />Logout</MenuItem>
                        </NavDropdown>
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