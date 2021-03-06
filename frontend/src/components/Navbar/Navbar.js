import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem 
} from 'reactstrap';

import './Navbar.css';


export default class NavbarComponent extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className={'Nav'}>
        <div className={'testDiv'}>
          testing some shit
        </div>
        <Navbar>
          <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Menu
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem href="#">
                      Appetizers
                    </DropdownItem>
                    <DropdownItem href="#">
                      Soups and Salads
                    </DropdownItem>
                    <DropdownItem href="#">
                      Noodles Corner
                    </DropdownItem>
                    <DropdownItem href="#">
                      Rice Corner
                    </DropdownItem>
                    <DropdownItem href="#">
                      Curry Corner
                    </DropdownItem>
                    <DropdownItem href="#">
                      Seafood Corner
                    </DropdownItem>
                    <DropdownItem href="#">
                      Entrées
                    </DropdownItem>
                    <DropdownItem href="#">
                      Sweets
                    </DropdownItem>
                    <DropdownItem href="#">
                      Drinks
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="#">Reservations</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Logo</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Order Online</NavLink>
                </NavItem>  
                <NavItem>
                  <NavLink href="#">Contact</NavLink>
                </NavItem>          
              </Nav>
            </Collapse>
          </Navbar>
      </div>
    )
  }
}


