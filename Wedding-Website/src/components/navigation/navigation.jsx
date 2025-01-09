import React from 'react';
import 'assets/css/components';

export const Navigation = () => {
  return (
    <nav className="nav-container">
      <div className="nav-content">
        <a href="/" className="nav-logo">
          Medium
        </a>
        <ul className="nav-links">
          <li><a href="/" className="nav-link">Home</a></li>
          <li><a href="/photos" className="nav-link">Photos</a></li>
          <li><a href="/travel" className="nav-link">Travel</a></li>
          <li><a href="/days-left" className="nav-link">Days Left</a></li>
        </ul>
      </div>
    </nav>
  );
};

