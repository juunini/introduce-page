import React from 'react';

function Projects(): JSX.Element {
  return (
    <section id="Projects">
      <h2>프로젝트</h2>

      <ul>
        <li>
          <img src="" alt="project thumbnail" />

          <div>
            <h3>프로젝트 명1</h3>
            <p>프로젝트 설명1</p>
          </div>
        </li>

        <li>
          <img src="" alt="project thumbnail" />

          <div>
            <h3>프로젝트 명2</h3>
            <p>프로젝트 설명2</p>
          </div>
        </li>

        <li>
          <img src="" alt="project thumbnail" />

          <div>
            <h3>프로젝트 명3</h3>
            <p>프로젝트 설명3</p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Projects;