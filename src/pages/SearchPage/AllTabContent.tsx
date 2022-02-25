import React from 'react';
import './searchPage.css';
import PopupUserList, { UserCardsInfo } from '../../components/PopupUserList/PopupUserList';

const AllTabContent: React.VFC<{ data: UserCardsInfo }> = ({ data }) => {
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
      <PopupUserList userCardsInfo={data} />
    </main>
  );
};

export default AllTabContent;
