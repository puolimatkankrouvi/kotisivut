import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav,NavItem} from 'reactstrap'

class Navigation extends Component {

  render() {
    return(
      <div>
      <Nav>
        <Navbar color="faded">
          <NavItem>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/cv">Cv</NavLink>
          </NavItem>
        </Navbar>
      </Nav>
      </div>
    );
  }
}

export default Navigation;