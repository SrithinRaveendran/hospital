
import React from 'react';
import './index.css';

const Header = () => {
  return (
    <div className="app-header">
      <div className="logo">🔥 MyApp</div>
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  );
};

export default Header;
