import React from "react";
import "./About.css";
import logo from "./img/portfolio.jpeg";

const About = () => {
  return (
    <section id="about" className="container">
      <div className="card">
        <div>
          <img className="logo" src={logo} alt="Sai Suresh Sakthivel" />
        </div>
        <div className="project-card">
          <ul>
            <li>
              <strong>Creative and self-starting team leader:</strong> 15 years
              of experience building high-volume consumer-facing products in
              fast-paced, collaborative environments.
            </li>
            <li>
              <strong>Highly skilled:</strong> Expertise in building micro
              frontend products using ReactJS and TypeScript.
            </li>
            <li>
              <strong>Passionate about:</strong> Usability, Accessibility,
              Observability, and Performance.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
