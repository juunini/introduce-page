import React from 'react';

import Item from '../../components/Contact/Item';
import './Contact.sass';

function Contact(): JSX.Element {
  return (
    <section id="Contact">
      <h2>Contact</h2>

      <Item href="https://github.com/juunini" description="Github">
        <img src="/images/github_dark.svg" alt="github" />
      </Item>

      <Item href="https://velog.io/@juunini" description="개발 블로그">
        <img src="/images/velog_favicon.ico" alt="velog" />
      </Item>

      <Item
        href="https://medium.com/@juuni.ni.i"
        description="개발과는 무관한 블로그"
      >
        <img src="/images/medium.ico" alt="medium" />
      </Item>

      <Item href="mailto:juuni.ni.i@gmail.com" description="Email">
        <img src="/images/gmail.png" alt="gmail" />
      </Item>
    </section>
  );
}

export default Contact;
