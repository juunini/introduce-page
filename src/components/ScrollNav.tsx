import React from 'react';

import ScrollLink from './ScrollLink';

type ScrollNavProps = {
  items: string[];
  children?: string | JSX.Element;
};

function ScrollNav({ items, children }: ScrollNavProps): JSX.Element {
  return (
    <nav>
      {children}
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            <ScrollLink to={`about${i}`}>{item}</ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default ScrollNav;
