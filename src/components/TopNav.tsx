import React from 'react';
import { Link } from '@reach/router';

type TopNavProps = {
  logo: JSX.Element | string;
  items: string[];
};

function TopNav({ logo, items }: TopNavProps): JSX.Element {
  return (
    <nav>
      <h1>
        <Link to="/">{logo}</Link>
      </h1>

      <ul>
        {items.map((item) => (
          <li key={item}>
            <a href={'#' + item}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TopNav;
