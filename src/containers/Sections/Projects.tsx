import React from 'react';

import Item from '../../components/Projects/Item';

function Projects(): JSX.Element {
  return (
    <section id="Projects">
      <h2>프로젝트</h2>

      <ul>
        <Item imgSrc="" imgAlt="project thumbnail" title="프로젝트 명1">
          프로젝트 설명1
        </Item>

        <Item imgSrc="" imgAlt="project thumbnail" title="프로젝트 명2">
          프로젝트 설명2
        </Item>

        <Item imgSrc="" imgAlt="project thumbnail" title="프로젝트 명3">
          프로젝트 설명3
        </Item>
      </ul>
    </section>
  );
}

export default Projects;
