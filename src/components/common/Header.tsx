import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="header-container">
        <div className="logo">
          <h1>ReadyWhen Pair Programming Exercises</h1>
        </div>
        <nav className="nav-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <div className="user-controls">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;