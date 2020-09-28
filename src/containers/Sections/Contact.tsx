import React from 'react';

function Contact(): JSX.Element {
  return (
    <section id="Contact">
      <h2>Contact</h2>

      <ul>
        <li>
          <a
            href="https://github.com/juunini"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="" alt="github" />
            <span>Github : https://github.com/juunini</span>
          </a>
        </li>

        <li>
          <a
            href="https://velog.io/@juunini"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="" alt="velog" />
            <span>Velog : https://velog.io/@juunini</span>
          </a>
        </li>

        <li>
          <a
            href="mailto:juuni.ni.i@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="" alt="gmail" />
            <span>Email : juuni.ni.i@gmail.com</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
