import React from 'react';

import ScrollNav from '../../components/ScrollNav';
import Article from '../../components/About/Article';

function About(): JSX.Element {
  return (
    <section id="About">
      <ScrollNav items={['이 개발언어를 좋아해요', '저는 이런 성격이에요']}>
        <h2>저는 이런 사람이에요</h2>
      </ScrollNav>

      <div>
        <Article
          id="about0"
          imgSrc=""
          imgAlt="mugcups"
          title="이 개발언어를 좋아해요"
        >
          <p>
            <strong>Node.JS &#38; Golang</strong>
            <br />
            직접 머그컵에 그림까지 그려넣을 정도로
            <br />이 언어들을 좋아해요.
          </p>
        </Article>

        <Article
          id="about1"
          imgSrc=""
          imgAlt="mbti"
          title="저는 이런 성격이에요"
        >
          <ul>
            <li>할 말은 똑부러지게 하는 성격이에요.</li>
            <li>성장욕구가 넘쳐요.</li>
          </ul>
        </Article>
      </div>
    </section>
  );
}

export default About;
