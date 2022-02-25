import React from 'react';
import PopupUserList, { UserCardsInfo } from '../../components/PopupUserList/PopupUserList';
import { baseURLmain } from '../../env';
import useFetchWithAuth from '../../hooks/useFetchWithAuth';

const FolloweeTabContent: React.VFC = () => {
  const { data } = useFetchWithAuth<{
    id: string,
    displayName: string
    imageUrl: string
    screenName: string
  }[]>(`${baseURLmain}/friends/followee`);

  if (data === undefined) {
    return (
      <main className="searchPage__main">
        <PopupUserList userCardsInfo={[]} />
      </main>
    );
  }

  const userCardsInfo: UserCardsInfo = new Array(data.length);
  for (let i = 0; i < data.length; i += 1) {
    const {
      displayName,
      imageUrl,
      screenName,
      id,
    } = data[i];
    userCardsInfo[i] = {
      user: {
        displayName,
        imageUrl,
        screenName,
      },
      id,
      mode: 'Add',
    };
  }

  return (
    <main className="searchPage__main">
      <PopupUserList userCardsInfo={userCardsInfo} />
    </main>
  );
};

export default FolloweeTabContent;
