import React from 'react';
import TopNav from './components/TopNav';

function App(): JSX.Element {
  return (
    <div>
      <TopNav logo="Juunini" items={['About', 'Projects', 'Contact']} />
    </div>
  );
}

export default App;
