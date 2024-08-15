import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">Home Page</Link>
            <Link to="/add" className="nav-link">Create Book</Link>
        </nav>
    );
}