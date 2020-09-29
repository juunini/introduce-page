import React from 'react';

type ArticleProps = {
  id: string;
  children: JSX.Element[];
};

function Article({ id, children }: ArticleProps): JSX.Element {
  return <article id={id}>{children}</article>;
}

export default Article;
