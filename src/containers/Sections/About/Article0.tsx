import React from 'react';

import Article from '../../../components/About/Article';

function Article0(): JSX.Element {
  return (
    <Article id="about0">
      <h2>자기소개 부탁드려요.</h2>
      <p>
        안녕하세요, 스타가 되고 싶고 브랜드가 되고 싶은 야망을 가진 개발자.
        쥬니니에요.
        <br />
        지금은 겨우 백엔드와 프론트엔드를 같이 하는 개발자일 뿐이지만,
        <br />
        열심히 성장해서 언젠간 꿈을 이루고 좋은 개발자가 되고 싶어요.
      </p>

      <h3>큰 꿈을 가지고 계시네요?</h3>
      <p>
        네. 좋은 사람들과 교류하고 함께 일하려면 먼저, 저 부터 그 정도의 사람이
        되어야 한다고 생각해서 그렇게 유명한 개발자가 되고 싶다는 꿈을 갖게
        됐어요.
        <br />
        그래서, 하고싶은 일도 많고 누구보다도 더 열심히 살고 많이 성장하고
        싶어요.
        <br />
        <br />제 능력을 100% 이상 이끌어내야 하는 그런 일들을 많이 경험하고
        싶어요.
        <br />
        힘들고 고통스럽겠지만요.
      </p>
      <img
        src="/images/pain.jpg"
        alt="고통 짤"
        style={{ display: 'block', margin: 'auto', maxWidth: '100%' }}
      />
    </Article>
  );
}

export default Article0;
