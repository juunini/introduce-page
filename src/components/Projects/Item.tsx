import React from 'react';

type ItemProps = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  children?: string | JSX.Element;
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
