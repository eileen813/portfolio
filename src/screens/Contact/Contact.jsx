import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <div className="contact-text">
        <h1>
          <span>E</span>ileen<span>O</span>
          livera@Hotmail.Com
        </h1>
      </div>

      <div className="contact-text">
        <a
          href="https://www.linkedin.com/in/eileen-olivera/"
          target="_blank"
          rel="noreferrer"
        >
          <h1>
            Catch me on LinkedIn Here! <span>eileen-olivera</span>
          </h1>
        </a>
      </div>

      <div className="contact-text">
        <a href="https://github.com/eileen813" target="_blank" rel="noreferrer">
          <h1>
            Click Here For My Github! <span>eileen813</span>
          </h1>
        </a>
      </div>
    </>
  );
}
