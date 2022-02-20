import React from 'react';
import { useFetch } from 'usehooks-ts';
import UserList from './UserList';

const FollowTabContent: React.VFC = () => {
  const token = localStorage.getItem('ryouomoi-checker-token');

  const { data } = useFetch<{
    displayName: string
    imageUrl: string
    screenName: string
  }[]>('http://localhost:8080/friends/follower', {
    headers: new Headers({ Authorization: `Bearer ${token}` }),
  });

  return (
    <main className="searchPage__main">
      <UserList users={data || []} />
    </main>
  );
};

export default FollowTabContent;
