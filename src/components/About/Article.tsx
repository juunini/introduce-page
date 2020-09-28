import React from 'react';

type ArticleProps = {
  id: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  children?: string | JSX.Element;
};

function Article({
  id,
  imgSrc,
  imgAlt,
  title,
  children,
}: ArticleProps): JSX.Element {
  return (
    <article id={id}>
      <img src={imgSrc} alt={imgAlt} />
      <h3>{title}</h3>
      {children}
    </article>
  );
}

export default Article;
