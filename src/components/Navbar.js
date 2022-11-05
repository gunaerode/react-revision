import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from './auth';

function Navbar() {
  const navLinkStyle = ({ isActive }) => {
    return isActive
      ? {
          backgroundColor: 'blue',
        }
      : { backgroundColor: 'gray' };
  };

  const auth = useAuth();

  return (
    <nav className='primary'>
      <NavLink style={navLinkStyle} to="/" end>
        Home
      </NavLink>
      <NavLink style={navLinkStyle} to="/about">
        About
      </NavLink>
      <NavLink style={navLinkStyle} to="/product">
        Product
      </NavLink>
      <NavLink style={navLinkStyle} to="/profile">
        Profile
      </NavLink>
      {
        !auth.user && <NavLink style={navLinkStyle} to="/login">Login</NavLink>
      }
    </nav>
  );
}

export default Navbar;
