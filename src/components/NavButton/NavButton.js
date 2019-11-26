import React from 'react';
import { NavLink } from 'react-router-dom';

function NavButton({ children, to, exact = false }) {
  return (
    <NavLink
      className="nav-button text-lg"
      to={to}
      exact={exact}
    >
      {children}
    </NavLink>
  );
}

export default NavButton;
