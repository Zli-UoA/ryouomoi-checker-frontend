import React from 'react';
import { useFetch } from 'usehooks-ts';
import UserList from './UserList';

const FollowerTabContent: React.VFC = () => {
  const token = localStorage.getItem('ryouomoi-checker-token');

  const { data } = useFetch<{
    displayName: string
    imageUrl: string
    screenName: string
  }[]>('https://ryouomoichecker.yt8492.com/api/friends/follower', {
    headers: new Headers({ Authorization: `Bearer ${token}` }),
  });

  return (
    <main className="searchPage__main">
      <UserList users={data || []} />
    </main>
  );
};

export default FollowerTabContent;
