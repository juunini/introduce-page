import React from 'react';

import './Intro.sass';

function Intro(): JSX.Element {
  return (
    <section id="Intro">
      <div>
        <h2>JUUNINI</h2>
        <p>
          Front-end &#38; Back-end
          <br />
          Developer
        </p>
      </div>
      <div>
        <img src="/images/profile.jpg" alt="profile" />
      </div>
    </section>
  );
}

export default Intro;
