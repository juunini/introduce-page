import React from 'react';

import ScrollLink from './ScrollLink';

type TopNavProps = {
  items: string[];
  children?: string | JSX.Element;
};

function TopNav({ children, items }: TopNavProps): JSX.Element {
  return (
    <nav className="top-nav">
      <h1>{children}</h1>

      <ul>
        {items.map((item) => (
          <li key={item}>
            <ScrollLink to={item}>{item}</ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TopNav;
