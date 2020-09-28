import React from 'react';

type TopNavProps = {
  title: string;
  items: string[];
};

function TopNav({ title, items }: TopNavProps): JSX.Element {
  return (
    <nav className="top-nav">
      <h1>
        <a href="#Intro">{title}</a>
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
