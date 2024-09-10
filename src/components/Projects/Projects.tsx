import React from "react";
import "./Projects.scss";

const projects = [
  {
    title: "TradeSpecifix",
    url: "https://tradespecifix.com/",
    description:
      "Project & Team Management app and time tracker for construction industry",
    stack: "React, PostgreSQL, Django, Flutter, MaterialUI",
  },
  {
    title: "FIXRS",
    url: "https://fixrs.ca/",
    description: "Business Website for FIXRS, a boutique digital agency",
    stack: "React, Three.js, SCSS",
  },
  {
    title: "CesTamoi",
    url: "https://cestamoi.ca/",
    description: "Personalised stickers app",
    stack: "React, PHP, SCSS",
  },
  {
    title: "PME Inter",
    url: "https://pmeinter.com/",
    description: "Business Website for a notary company",
    stack: "React, PostgreSQL, Bootstrap, SCSS",
  },
];

export default function Projects() {
  return (
    <article className="projects">
      {projects.map((project, index) => {
        return (
          <article className="project-entry" key={index}>
            <a
              href={project.url}
              target="_blank"
              className="project-link"
              rel="noreferrer"
            >
              {project.title}
            </a>
            <p className="project-description">{project.description}</p>
            <p className="project-stack">Stack: {project.stack}</p>
          </article>
        );
      })}
    </article>
  );
}
