import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <div>
      <header>
        <a
          href="https://www.linkedin.com/in/eileen-olivera/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="linkedin" src="./linkedin.png" alt="linkedin"></img>
        </a>

        <Link to="/">
          <img className="logo" src="./eologo.png" alt="logo"></img>
        </Link>

        <a href="https://github.com/eileen813" target="_blank" rel="noreferrer">
          <img className="octonaut" src="./octonaut.jpeg" alt="octonaut"></img>
        </a>
      </header>

      <ul>
        <Link to="/projects">
          <li>Projects</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
}
