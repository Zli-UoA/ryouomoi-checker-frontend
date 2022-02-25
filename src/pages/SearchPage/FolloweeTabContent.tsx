import React from 'react';
import PopupUserList from '../../components/PopupUserList/PopupUserList';
import { baseURL } from '../../env';
import useFetchWithAuth from '../../hooks/useFetchWithAuth';
import User from '../../types/User';

const FolloweeTabContent: React.VFC = () => {
  const { data } = useFetchWithAuth<User[]>(`${baseURL}/friends/followee`);

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

export default FolloweeTabContent;
