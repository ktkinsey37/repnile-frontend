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


function NavBar() {

  const user = useContext(UserContext)

  console.log(user, "this is user from usercontext in navbar")

  if (user.user == undefined){
    console.log("this is with username undefined")

  return (
    <div>
      <Navbar expand="md">
        <NavbarBrand href="/">Repnile</NavbarBrand>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/login">Login</NavLink>            
          </NavItem>
          <NavItem>
            <NavLink to="/register">Register</NavLink>            
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );}



  else if (user.user == "test"){
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
            <NavLink to="/home">Logout</NavLink>
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
              <NavLink to="/companies">Companies</NavLink>            
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

  }


}

export default NavBar;
