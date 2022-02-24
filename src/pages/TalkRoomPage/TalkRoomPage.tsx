import React from 'react';
import useLovePoint from '../../hooks/useLovePoint/useLovePoint';

type UseLovePointTestProps = {
  id: string
};

const UseLovePointTest: React.VFC<UseLovePointTestProps> = ({ id }) => {
  const {
    usePostLovePoint,
    lovePoint: oldLovePoint,
  } = useLovePoint(id);

  return (
    <div>
      {`old     lovePoint is ${oldLovePoint}`}

      <button type="button" onClick={usePostLovePoint(3)}>
        post!
      </button>
    </div>
  );
};

const TalkRoomPage: React.VFC = () => (
  <UseLovePointTest id="972404402425245697" />
);

export default TalkRoomPage;
