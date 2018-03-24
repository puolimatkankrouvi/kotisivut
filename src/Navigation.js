import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';

class Navigation extends Component {

  render() {
    return(
      <div>
        <Navbar color="blue" light-expand="md">
          <Nav className="nav">
            <NavItem>
              <NavLink className="nav-link" to="/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/prog">Programming</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/equip">Equipment</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;