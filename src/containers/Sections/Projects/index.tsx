import React from 'react';

import './Projects.sass';
import Project0 from './Project0';
import Project1 from './Project1';

function Projects(): JSX.Element {
  return (
    <section id="Projects">
      <h2>Projects</h2>

      <ul>
        <Project0 />
        <Project1 />
      </ul>
    </section>
  );
}

export default Projects;
