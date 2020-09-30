import React, { useState } from 'react';

import ScrollLink from './ScrollLink';
import './TopNav.sass';

type TopNavProps = {
  items: string[];
  children?: string | JSX.Element;
};

function TopNav({ children, items }: TopNavProps): JSX.Element {
  const [state, setState] = useState({
    active: false,
  });
  const { active } = state;
  const navClassName = active ? 'top-nav active' : 'top-nav';
  const buttonClassName = active
    ? 'mobile-top-nav-button active'
    : 'mobile-top-nav-button';

  function setActive(active: boolean) {
    setState({ active: active });
  }
  function handleClick() {
    active ? setActive(false) : setActive(true);
  }

  window.onresize = function () {
    const scrollWidth = window.innerWidth;
    const mobileWidth = 768;

    if (scrollWidth > mobileWidth) {
      setActive(false);
    }
  };

  return (
    <>
      <div className={buttonClassName} onClick={handleClick}>
        <span />
        <span />
        <span />
      </div>

      <nav className={navClassName}>
        <h1>{children}</h1>

        <ul>
          {items.map((item) => (
            <li key={item}>
              <ScrollLink to={item}>{item}</ScrollLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default TopNav;
