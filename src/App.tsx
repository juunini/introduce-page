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

      <main>
        <section id="About">
          <div>
            <h2>JUUNINI</h2>
            <p>
              Front-end &#38; Back-end
              <br />
              Developer
            </p>
          </div>
          <div>
            <img src="" alt="profile" />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
