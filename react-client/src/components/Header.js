import React, { Fragment} from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = ({booklist}) => {
    return (
      <Fragment>
            <Navbar  bg="dark" variant="dark">
              <NavbarBrand> {typeof booklist === 'string' ? `Viewing ${booklist} Books` : `Showing All ${booklist} Books` } </NavbarBrand>
              <Nav navbar>
                <NavItem>
                   <span className='header'>  </span>
                </NavItem>
              </Nav>
            </Navbar>
      </Fragment>
    )
}

export default Header