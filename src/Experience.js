import React from "react";
import "./Project.css";
import exp from "./Experience.json";
const Experience = () => {
  const companyExp = exp.map((item,index) => {
    return (
      <div className={(index==0)?"project-card type1":"project-card type2"}>
        <h3>{item.company}</h3>
        <h4>{item.position}</h4>
        <ul>
          {item.description.map((desc) => {
            return <li key={desc}>{desc}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <section id="projects" className="container">
      <h2>Experience</h2>
      <div className="project-grid">
        {companyExp}
      </div>
    </section>
  );
};

export default Experience;
