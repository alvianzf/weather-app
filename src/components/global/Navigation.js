import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  Collapse
} from "reactstrap";

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    const isOpen = !this.state.isOpen;

    this.setState({
      isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">
            <i className="material-icons text-warning">cloud</i> Alvian's
            Weather App
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem></NavItem>
            </Nav>
            <a href="/today" className="text-warning">
              Today's weather
            </a>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
