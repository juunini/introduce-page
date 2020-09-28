import React from 'react';

type ItemProps = {
  href: string;
  description: string;
  children?: string | JSX.Element;
};

function Item({ href, description, children }: ItemProps): JSX.Element {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer noopener">
        {children}
        <span>{description}</span>
      </a>
    </li>
  );
}

export default Item;
