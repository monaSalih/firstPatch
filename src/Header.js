import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton'
class Header extends React.Component {
  render() {
    const {  isAuthenticated } = this.props.auth0;
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Link to="/" className="nav-link">Home</Link>

        <Link to="/profile" className="nav-link">profile</Link>
        <Link to="/favorateStore" className="nav-link">store one</Link>
       {/* TODO: if the user is logged in, render a navigation link to profile page */}
        {/* TODO: if the user is 000000 logged in, render the `LogoutButton` */}
        {isAuthenticated ?<LogoutButton/>:<LoginButton/>}
      </Navbar>
    )
  }
}

export default withAuth0(Header);
