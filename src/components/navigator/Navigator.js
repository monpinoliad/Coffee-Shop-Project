import React from 'react';
import { Link } from 'react-router-dom';

function Navigator() {
    return (    
    <nav className="nav">
        <div className="nav__logo">qwertea</div>
        <ul className="nav__menu">
          <Link to="/">
            <li className="nav__menu--item">Home</li>
          </Link>
          <Link to="/coffee">
            <li className="nav__menu--item">Coffee</li>
          </Link>
          <Link to="/tea">
            <li className="nav__menu--item">Tea</li>
          </Link>
          <Link to="/menu">
            <li className="nav__menu--item">Menu</li>
          </Link>
          <Link to="/blogs">
            <li className="nav__menu--item">Blogs</li>
          </Link>
        </ul>
        <a href="/account" className="nav__account">Account</a>
    </nav>
  );
}

export default Navigator;
