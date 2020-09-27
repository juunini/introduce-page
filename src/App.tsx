import React from 'react';

function App(): JSX.Element {
  return (
    <>
      <nav>
        <h1>
          <a href="#Intro">Juunini</a>
        </h1>

        <ul>
          {['About', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a href={'#' + item}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>

      <main>
        <section id="Intro">
          <div>
            <h2>JUUNINI</h2>
            <p>
              Front-end &#38; Back-end
              <br />
              Developer
            </p>
          </div>
          <div>
            <img src="" alt="profile" />
          </div>
        </section>

        <section id="About">
          <nav>
            <h2>저는 이런 사람이에요</h2>
            <ul>
              {['이 개발언어를 좋아해요', '저는 이런 성격이에요'].map(
                (item, i) => (
                  <li key={i}>{`0${i + 1} ${item}`}</li>
                )
              )}
            </ul>
          </nav>

          <div>
            <article>
              <img src="" alt="mugcups" />
              <h3>이 개발언어를 좋아해요</h3>
              <p>
                <strong>Node.JS &#38; Golang</strong>
                <br />
                직접 머그컵에 그림까지 그려넣을 정도로
                <br />이 언어들을 좋아해요.
              </p>
            </article>

            <article>
              <img src="" alt="mbti" />
              <h3>저는 이런 성격이에요</h3>
              <ul>
                <li>할 말은 똑부러지게 하는 성격이에요.</li>
                <li>성장욕구가 넘쳐요.</li>
              </ul>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
