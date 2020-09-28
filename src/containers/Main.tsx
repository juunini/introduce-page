import React from 'react';

import Intro from './Sections/Intro';
import About from './Sections/About';

function Main(): JSX.Element {
  return (
    <main>
      <Intro />
      <About />
    </main>
  );
}