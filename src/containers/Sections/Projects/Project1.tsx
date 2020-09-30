import React from 'react';

import Item from '../../../components/Projects/Item';

function Project0(): JSX.Element {
  return (
    <Item
      imgSrc="/images/ping_monitor.png"
      imgAlt="프로젝트 썸네일"
      title="ping monitor"
    >
      <strong>
        tcp나 udp방식으로 특정 포트에 ping을 체크하여
        <br />
        서비스의 작동 여부를 모니터링하는 프로그램입니다.
      </strong>
      <br />
      <br />
      여러개의 서버가 로드밸런싱 되어서 하나가 죽더라도 서비스에 지장이 없긴
      하지만,
      <br />
      죽은 서버를 다시 올려주어야 하는데 서비스에 장애가 나거나 티가 안나다보니
      <br />
      업데이트 등의 이벤트로 서버를 살펴보아야 하는 경우가 아니면 파악을 할 수
      없는 이슈가 있었습니다.
      <br />
      <br />
      상식적으로는 이런 부분에 모니터링을 하는 서비스를 놓아 알림을 받아야
      했지만
      <br />첫 회사에서 근무하던 당시 그런 상식적인게 없어서 직접 만들었습니다.
    </Item>
  );
}

export default Project0;
