import React from 'react';
import { Link } from 'react-scroll';

type ScrollLinkProps = {
  to: string;
  children?: string | JSX.Element;
};

function ScrollLink({ to, children }: ScrollLinkProps): JSX.Element {
  return (
    <Link
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      hashSpy={true}
      duration={500}
      isDynamic={true}
    >
      {children}
    </Link>
  );
}

export default ScrollLink;
