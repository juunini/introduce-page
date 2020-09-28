import React from 'react';

import Item from '../../components/Contact/Item';

function Contact(): JSX.Element {
  return (
    <section id="Contact">
      <h2>Contact</h2>

      <ul>
        <Item href="https://github.com/juunini" description="깃허브 링크">
          <img src="" alt="github" />
        </Item>

        <Item href="https://velog.io/@juunini" description="개발 블로그">
          <img src="" alt="velog" />
        </Item>

        <Item
          href="https://medium.com/@juuni.ni.i"
          description="개발과는 무관한 블로그"
        >
          <img src="" alt="medium" />
        </Item>

        <Item href="mailto:juuni.ni.i@gmail.com" description="Email">
          <img src="" alt="gmail" />
        </Item>
      </ul>
    </section>
  );
}

export default Contact;
