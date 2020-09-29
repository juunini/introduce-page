import React from 'react';

import ScrollNav from '../../../components/ScrollNav';
import Article0 from './Article0';
import Article1 from './Article1';
import Article2 from './Article2';
import './About.sass';

function About(): JSX.Element {
  return (
    <section id="About">
      <ScrollNav items={interviewTitles}>
        <h2>Juunini의 인터뷰</h2>
      </ScrollNav>

      <div>
        <Article0 />
        <Article1 />
        <Article2 />
      </div>
    </section>
  );
}

export default About;

const interviewTitles = [
  '자기소개 부탁드려요.',
  '개발에 대한 가치관이 있나요?',
  '어떤 곳에서 일 하고 싶은가요?',
];
