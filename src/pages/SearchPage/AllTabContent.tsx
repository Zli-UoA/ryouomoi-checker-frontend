import React from 'react';
import UserList from './UserList';

type User = {
  displayName: string,
  screenName: string,
  imageUrl: string,
};

const AllTabContent: React.VFC = () => {
  const data: User[] = new Array(Math.random() < 0.5 ? 20 : 0).fill({
    displayName: '会津夏菜子',
    imageUrl: 'https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg',
    screenName: '@kanako',
  });

  return (
    <main className="searchPage__main">
      <UserList users={data || []} />
    </main>
  );
};

export default AllTabContent;
