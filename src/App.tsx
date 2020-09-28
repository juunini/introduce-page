import React from 'react';

import './App.sass';
import TopNav from './components/TopNav';
import ScrollLink from './components/ScrollLink';
import Main from './containers/Main';

function App(): JSX.Element {
  return (
    <>
      <TopNav items={['About', 'Projects', 'Contact']}>
        <ScrollLink to="Intro">Juunini</ScrollLink>
      </TopNav>

      <Main />
    </>
  );
}

export default App;
