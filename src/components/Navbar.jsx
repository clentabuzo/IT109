import React from 'react';
import logo from '../assets/logo.png'; // Import the logo image
import '../styles/navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="DoList"  />
        <span className='fs-4 fw-bold'>DoList</span>
      </div>
      <div className="nav-links">
        <ul>
        <li>
            <a
              className="text-dark icon-link icon-link-hover"
              style={{ "--bs-link-hover-color-rgb": "25, 135, 84" }}
              href="/"
            >
            Home
          </a>
          </li>
          <li>
            <a
              className="text-dark icon-link icon-link-hover"
              style={{ "--bs-link-hover-color-rgb": "25, 135, 84" }}
              href="/login"
            >
              Login
            </a>
          </li>
          
          
          <li style={{ marginRight: '60px' }}>
            <button className="rounded-pill">
              <a className="text-light" href="/signup">
                Start for free
              </a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
