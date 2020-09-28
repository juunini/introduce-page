import React from 'react';

import './App.sass';
import TopNav from './components/TopNav';
import Main from './containers/Main';

function App(): JSX.Element {
  return (
    <>
      <TopNav
        title="Juunini"
        items={['About', 'Projects', 'Contact']}
      />

      <Main />
    </>
  );
}

export default App;
