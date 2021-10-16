import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">
            <img src="./logo.png" alt="logo"></img>
          </Link>
        </li>
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
