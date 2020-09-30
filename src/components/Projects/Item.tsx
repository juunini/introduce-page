import React, { ReactNode } from 'react';

type ItemProps = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  children?: ReactNode;
};

function Item({ imgSrc, imgAlt, title, children }: ItemProps): JSX.Element {
  return (
    <li>
      <img src={imgSrc} alt={imgAlt} />

      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </li>
  );
}

export default Item;
