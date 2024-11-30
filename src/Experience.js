import React from "react";
import "./Project.css";
import exp from "./Experience.json";
const Experience = () => {
  const companyExp = exp.map((item) => {
    return (
      <div className="project-card">
        <h3>{item.company}</h3>
        <h4>{item.position}</h4>
        <ul>
          {item.description.map((desc) => {
            return <li>{desc}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <section id="projects" className="container">
      <h2>Experience</h2>
      <div className="project-grid">
        <div className="project-card">
          {/* <h3>Project 1</h3>
          <p>A brief description of Project 1.</p>*/}
          {companyExp}
        </div>
      </div>
    </section>
  );
};

export default Experience;
