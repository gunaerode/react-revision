import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const navLinkStyle = ({ isActive }) => {
    return isActive
      ? {
          backgroundColor: 'blue',
        }
      : { backgroundColor: 'gray' };
  };
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
    </nav>
  );
}

export default Navbar;
