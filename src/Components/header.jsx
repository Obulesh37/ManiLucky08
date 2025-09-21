import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="nav">
      <Link to="/" className="logo">M<span>v</span></Link>
            <input type="checkbox" id="toggle" />
            <label htmlFor="toggle"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
            </svg>
        </label>
            <ul className="list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/About">About</Link></li>
              <li><Link to="/MySkills">My Skills</Link></li>
              <li><Link to="/Resume">Resume</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
            </ul>
            
          </header>
  );
}
export default Header;