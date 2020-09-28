import React from 'react';

import Intro from './Sections/Intro';
import About from './Sections/About';
import Projects from './Sections/Projects';
import Contact from './Sections/Contact';

function Main(): JSX.Element {
  return (
    <main id="main">
      <Intro />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default Main;
