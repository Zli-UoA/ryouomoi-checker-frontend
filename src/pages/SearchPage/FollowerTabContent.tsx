import React from 'react';
import useFetchWithAuth from '../../hooks/useFetchWithAuth';
import UserList from './UserList';

const FollowerTabContent: React.VFC = () => {
  const { data } = useFetchWithAuth<{
    displayName: string
    imageUrl: string
    screenName: string
  }[]>('https://ryouomoichecker.yt8492.com/api/friends/follower');

  return (
    <main className="searchPage__main">
      <UserList users={data || []} />
    </main>
  );
};

export default FollowerTabContent;
