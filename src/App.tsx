import React from 'react';
import { Link } from '@reach/router';

function App(): JSX.Element {
  return (
    <>
      <nav>
        <h1>
          <Link to="/">Juunini</Link>
        </h1>

        <ul>
          {['About', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a href={'#' + item}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default App;
