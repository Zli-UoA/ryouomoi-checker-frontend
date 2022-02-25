import React from 'react';
import { useFetch } from 'usehooks-ts';
import PopupUserList, { UserCardsInfo } from '../../components/PopupUserList/PopupUserList';

const FolloweeTabContent: React.VFC = () => {
  const token = localStorage.getItem('ryouomoi-checker-token');

  const { data } = useFetch<{
    id: string,
    displayName: string
    imageUrl: string
    screenName: string
  }[]>('https://ryouomoichecker.yt8492.com/api/friends/followee', {
    headers: new Headers({ Authorization: `Bearer ${token}` }),
  });

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
