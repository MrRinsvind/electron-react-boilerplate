import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from 'reactstrap'

class Header extends Component {

  sidebarToggle(e) {
    e.preventDefault()
    document.body.classList.toggle('sidebar-hidden')
  }

  sidebarMinimize(e) {
    e.preventDefault()
    document.body.classList.toggle('sidebar-minimized')
  }

  mobileSidebarToggle(e) {
    e.preventDefault()
    document.body.classList.toggle('sidebar-mobile-show')
  }

  asideToggle(e) {
    e.preventDefault()
    document.body.classList.toggle('aside-menu-hidden')
  }

  render() {
    return (
      <header className="app-header navbar">
        <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>
        <NavbarBrand href="#"></NavbarBrand>
        <NavbarToggler className="d-md-down-none" onClick={this.sidebarToggle}>
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>
        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to={'/dashboard'}>Главная</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to={'/clients'}>Клиенты</NavLink>
          </NavItem>
        </Nav>
      </header>
    )
  }
}

export default Header;
