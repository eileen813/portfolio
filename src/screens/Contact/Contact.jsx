import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <div>
        <h1 className="contact-text">
          <span>E</span>ileen<span>O</span>
          livera@Hotmail.Com
        </h1>
      </div>

      <div>
        <a
          href="https://www.linkedin.com/in/eileen-olivera/"
          target="_blank"
          rel="noreferrer"
        >
          <h1 className="contact-text">
            Catch Me On LinkedIn Here! <span>eileen-olivera</span>
          </h1>
        </a>
      </div>

      <div>
        <a href="https://github.com/eileen813" target="_blank" rel="noreferrer">
          <h1 className="contact-text">
            Click Here For My Github! <span>eileen813</span>
          </h1>
        </a>
      </div>
    </>
  );
}
