import React from 'react';
import { baseURLmain } from '../../env';
import useFetchWithAuth from '../../hooks/useFetchWithAuth';
import UserList from './UserList';

const FollowerTabContent: React.VFC = () => {
  const { data } = useFetchWithAuth<{
    displayName: string
    imageUrl: string
    screenName: string
  }[]>(baseURLmain);

  return (
    <main className="searchPage__main">
      <UserList users={data || []} />
    </main>
  );
};

export default FollowerTabContent;
