import React from 'react';

import Article from '../../../components/About/Article';

function Article1(): JSX.Element {
  return (
    <Article id="about1">
      <h2>개발에 대한 가치관이 있나요?</h2>
      <p>
        코드를 만드는건 목표를 이루기 위한 <strong>방법을 기술하는 과정</strong>
        이라 생각해요.
        <br />
        프로그래밍 언어는 그 방법을 기술하는 <strong>방식</strong> 일 뿐이라
        생각하구요.
        <br />
        <br />
        방법이 결정 된다면 어떤 프로그래밍 언어를 사용하던지 상관없이 동일한
        원칙과 방법으로 만들 수 있어야 한다고 생각해요.
        <br />
        그러한 과정에서 선택되는 라이브러리나 프레임워크는 방식의 차이일
        뿐이라고 생각하구요.
      </p>

      <h3>어떤 프로그래밍 언어를 주로 쓰나요?</h3>
      <div>
        <img
          src="/images/mugcups.jpg"
          alt="mugcups"
          style={{
            maxWidth: '12.5rem',
          }}
        />
        <p>
          <strong>Go</strong>와 <strong>Node.JS</strong>를 주로 사용해요.
          <br />
          <br />
          프론트엔드 작업을 위해서는 React를 사용하는 편이고,
          <br />
          백엔드 작업은 상황에 따라 다른데,
          <br />
          프론트 페이지와 연결하는 부분은 주로 Node.JS를 사용하고,
          <br />
          API서버나 스케쥴러 같이 정말 순수하게 백엔드로만 이루어진 부분들은
          Go로 작업 하는걸 좋아해요.
        </p>
      </div>
    </Article>
  );
}

export default Article1;
