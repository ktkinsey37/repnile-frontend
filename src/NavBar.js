import React, {useContext} from "react";
// import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav,  Collapse,
    NavbarToggler,
    NavbarBrand,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem} from "reactstrap";
import UserContext from "./UserContext";


function NavBar({ logout }) {

  const user = useContext(UserContext)

  if (user.username == undefined){

  return (
    <div>
      <Navbar expand="md">
        <NavbarBrand href="/">Repnile</NavbarBrand>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/login">Login</NavLink>            
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );}


// Need to hardcode that in
  else if (user.username == "test"){
      return (
    <div>
      <Navbar expand="md">
        <NavbarBrand href="/">Repnile</NavbarBrand>


        ADMIN ROUTE
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/messages">Messages</NavLink>            
          </NavItem>
          <NavItem>
            <NavLink to="/items">Items</NavLink>            
          </NavItem>
          <NavItem>
            <NavLink to="/animals">Animals</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/" onClick={logout}>Logout</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/animals/add">Add Animal</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
  }

  // instead of
//   <NavItem>
//   <NavLink to="/home">Logout</NavLink>
// </NavItem>
// have a 

  else {
    return (
      <div>
        <Navbar expand="md">
          <NavbarBrand href="/">Jobly</NavbarBrand>
  
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/companies">Companies IF HITTING THIS ROUTE ITS A USERNAME OR SMTH ERROR</NavLink>            
            </NavItem>
            <NavItem>
              <NavLink to="/jobs">Jobs</NavLink>            
            </NavItem>
            <NavItem>
              <NavLink to="/profile">Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/logout">Logout</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );

    // I need to take out the else block above and replace it with an error. if the uname isnt dina or undefined its a breach

  }


}

export default NavBar;
