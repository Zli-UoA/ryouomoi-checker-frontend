import React from 'react';
import Popup from '../../components/Popup/Popup';
import useHeartRating from '../../hooks/useHeartRating';
import useOpen from '../../hooks/useOpen';
import UserCard from '../../components/UserCard/UserCard';

type UsePopupTestProps = {
  displayName: string,
  imageUrl: string,
  screenName: string,
  id: string,
};

const UsePopupTest: React.VFC<UsePopupTestProps> = ({
  displayName, imageUrl, screenName, id,
}) => {
  const { isOpen, open, close } = useOpen();
  const { setRating, rating } = useHeartRating();
  return (
    <>
      <button type="button" onClick={open}>
        <UserCard
          displayName={displayName}
          imageUrl={imageUrl}
          screenName={screenName}
        />
      </button>

      <div className="bg_primary">
        <Popup
          isOpen={isOpen}
          user={{
            displayName, imageUrl, screenName, id,
          }}
          primaryAction={close}
          cancelAction={close}
          setHeartRating={setRating}
          heartRating={rating}
        />
      </div>
      {rating}
      {isOpen}
    </>
  );
};

const TalkRoomPage: React.VFC = () => (
  <UsePopupTest
    displayName="いえすたにかわ"
    imageUrl="https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg"
    screenName="Aizu Taro"
    id="972404402425245697"
  />
);

export default TalkRoomPage;
