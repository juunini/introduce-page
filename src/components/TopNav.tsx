import React from 'react';

import ScrollLink from './ScrollLink';

type TopNavProps = {
  title: string;
  items: string[];
};

function TopNav({ title, items }: TopNavProps): JSX.Element {
  return (
    <nav className="top-nav">
      <h1>
        <ScrollLink to="Intro">{title}</ScrollLink>
      </h1>

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
