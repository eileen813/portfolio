import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="project-container">
      <div>
        <img className="images" src="./cityslicker.png" alt="CitySlicker"></img>
      </div>

      <div className="texts">
        <p>
          An app that used the Teleport Public API to obtain requests from the
          user to render on the browser for a specifically searched city’s
          population, average temperatures, rent, salary, and available startup
          jobs.
        </p>
        <a
          className="projects-link"
          href="https://eileen813.github.io/City-Slicker/"
          target="_blank"
          rel="noreferrer"
        >
          Deployed Site
        </a>

        <a
          className="projects-link"
          href="https://github.com/eileen813/City-Slicker"
          target="_blank"
          rel="noreferrer"
        >
          Explore Code
        </a>
      </div>

      <div>
        <img className="images" src="./chorebox.png" alt="ChoreBox"></img>
      </div>

      <div className="texts">
        <p>
          An interactive React app implemented with Axios to obtain Airtable
          data to render, create, edit, or delete one or all chores.
        </p>
        <a
          className="projects-link"
          href="https://chore-box.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Deployed Site
        </a>

        <a
          className="projects-link"
          href="https://github.com/eileen813/chorebox"
          target="_blank"
          rel="noreferrer"
        >
          Explore Code
        </a>
      </div>

      <div>
        <img
          className="images"
          src="./tacato truck.png"
          alt="Tacato Truck"
        ></img>
      </div>

      <div className="texts">
        <p>
          A full stack Mongo/Express/React/Node(MERN Stack) app where a user can
          sign in and render, create, edit, or delete one or all tacos from
          their profile. This app was created with three other classmates. I
          created the home page mission with its random carousel menu. I also
          designed the main menu page that displays all menu items using
          Material UIs Cards component.
        </p>
        <a
          className="projects-link"
          href="https://tacato-truck.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Deployed Site
        </a>

        <a
          className="projects-link"
          href="https://github.com/eileen813/TacatoTruck"
          target="_blank"
          rel="noreferrer"
        >
          Explore Code
        </a>
      </div>

      <div>
        <img className="images" src="./homepro.png" alt="HomePro"></img>
      </div>

      <div className="texts">
        <p>
          An interactive full-stack, full CRUD app, using a RESTful JSON API
          with the so-called "React on Rails" stack. The app allows a user to
          sign in and keep track of all their home remodeling projects, by means
          of adding, editing, or deleting a project.
        </p>
        <a
          className="projects-link"
          href="https://home-pro.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Deployed Site
        </a>

        <a
          className="projects-link"
          href="https://github.com/eileen813/homepro"
          target="_blank"
          rel="noreferrer"
        >
          Explore Code
        </a>
      </div>
    </div>
  );
}
