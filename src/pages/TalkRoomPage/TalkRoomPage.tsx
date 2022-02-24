import React from 'react';
import UserCard from '../SearchPage/UserCard';
import usePopup from '../../hooks/usePopup/usePopup';

type UsePopupTestProps = {
  displayName: string,
  imageUrl: string,
  screenName: string,
  id: string,
  mode: 'Add' | 'Edit'
};

const UsePopupTest: React.VFC<UsePopupTestProps> = ({
  displayName, imageUrl, screenName, id, mode,
}) => {
  const {
    isOpen,
    selectedCount,
    PopupTrigger,
    Popup,
  } = usePopup(imageUrl, displayName, screenName, id, mode);

  return (
    <>
      <PopupTrigger>
        <UserCard
          displayName={displayName}
          imageUrl={imageUrl}
          screenName={screenName}
        />
      </PopupTrigger>

      <div className="bg_primary">
        <Popup />
      </div>

      {selectedCount}
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
    mode="Add"
  />
);

export default TalkRoomPage;
