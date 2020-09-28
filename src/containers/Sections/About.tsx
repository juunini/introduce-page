import React from 'react';

function About(): JSX.Element {
  return (
    <section id="About">
      <nav>
        <h2>저는 이런 사람이에요</h2>
        <ul>
          {['이 개발언어를 좋아해요', '저는 이런 성격이에요'].map((item, i) => (
            <li key={i}>
              <a href={`#about${i}`}>{`0${i + 1} ${item}`}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <article id="about0">
          <img src="" alt="mugcups" />
          <h3>이 개발언어를 좋아해요</h3>
          <p>
            <strong>Node.JS &#38; Golang</strong>
            <br />
            직접 머그컵에 그림까지 그려넣을 정도로
            <br />이 언어들을 좋아해요.
          </p>
        </article>

        <article id="about1">
          <img src="" alt="mbti" />
          <h3>저는 이런 성격이에요</h3>
          <ul>
            <li>할 말은 똑부러지게 하는 성격이에요.</li>
            <li>성장욕구가 넘쳐요.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default About;
