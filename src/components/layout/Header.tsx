import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
      </nav>
    </div>
  );
}
