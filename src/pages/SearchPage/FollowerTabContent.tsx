import React from 'react';
import { baseURL } from '../../env';
import useFetchWithAuth from '../../hooks/useFetchWithAuth';
import PopupUserList from '../../components/PopupUserList/PopupUserList';
import User from '../../types/User';

const FollowerTabContent: React.VFC = () => {
  const { data } = useFetchWithAuth<User[]>(`${baseURL}/friends/follower`);

  if (data === undefined) {
    return (
      <main className="searchPage__main">
        <PopupUserList userCardsInfo={[]} />
      </main>
    );
  }

  return (
    <main className="searchPage__main">
      <PopupUserList userCardsInfo={data} />
    </main>
  );
};

export default FollowerTabContent;
