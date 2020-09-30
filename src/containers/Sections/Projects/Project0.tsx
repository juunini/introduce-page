import React from 'react';

import Item from '../../../components/Projects/Item';

function Project0(): JSX.Element {
  return (
    <Item
      imgSrc="/images/simple_go_line_notify.png"
      imgAlt="프로젝트 썸네일"
      title="simple go line notify 라이브러리"
    >
      <strong>
        라인 notify API를 쉽게 보낼 수 있도록 도와주는 golang 라이브러리입니다.
      </strong>
      <br />
      <br />
      첫 회사에서 커뮤니케이션을 주로 라인 메신저를 이용하였는데,
      <br />
      덕분에 라인의 notify API를 이용하여 자동으로 메세지를 보낼 일이 종종
      있었습니다.
      <br />
      <br />
      라인 notify API가 사용하기 어렵진 않으나,
      <br />
      간단하게 보내도록 도움을 주는 golang의 라이브러리가 없었고,
      <br />
      그런 부분을 다른 개발자들에게 공유할 수 있지 않을까 하여 만들게
      되었습니다.
    </Item>
  );
}

export default Project0;
