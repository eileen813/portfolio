import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div>
        <img className="eo-img" src="./eo outside.jpeg" alt="Eileen"></img>
      </div>

      <div className="text-container">
        <p className="home-blurb">
          Hi! My name is Eileen, and thank you for joining me on my journey to
          becoming a top-notch Software Engineer. Take a look around and explore
          what I built so far.
        </p>

        <a href="https://github.com/eileen813" target="_blank" rel="noreferrer">
          <img className="setupcat" src="./setupcat.jpeg" alt="Setupcat"></img>
        </a>
      </div>
    </div>
  );
}
