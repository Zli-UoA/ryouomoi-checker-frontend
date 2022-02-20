import React from 'react';
import { useFetch } from 'usehooks-ts';
import UserList from './UserList';

const FolloweeTabContent: React.VFC = () => {
  const token = localStorage.getItem('ryouomoi-checker-token');

  const { data } = useFetch<{
    displayName: string
    imageUrl: string
    screenName: string
  }[]>('http://localhost:8080/friends/followee', {
    headers: new Headers({ Authorization: `Bearer ${token}` }),
  });

  return (
    <main className="searchPage__main">
      <UserList users={data || []} />
    </main>
  );
};

export default FolloweeTabContent;
