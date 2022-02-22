import React from 'react';
import User from '../../types/User';
import UserList from './UserList';

const AllTabContent: React.VFC<{ data: User[] }> = ({ data }) => {
  if (data.length === 0) {
    return (
      <main className="searchPage__main">
        <div className="searchPage__main--user_null">
          <span className="color_primarySolid">検索ボックス</span>
          に
          <br />
          キーワードを入力してください
        </div>
      </main>
    );
  }

  return (
    <main className="searchPage__main">
      <UserList users={data} />
    </main>
  );
};

export default AllTabContent;
