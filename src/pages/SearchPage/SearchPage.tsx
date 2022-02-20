import React from 'react';
import { useFetch } from 'usehooks-ts';
import Header from '../../components/Header/Header';
import { BackIcon } from '../../components/Icon/Icon';
import useSearchInput from '../../components/Input/useSearchInput';
import '../../common.css';
import useTab from '../../hooks/useTab/useTab';
import UserList from './UserList';
import './searchPage.css';

type User = {
  name: string,
  image: string,
  id: string
};

type SearchPageMainContentProps = {
  users: User[]
};

const SearchPageMainContent: React.VFC<SearchPageMainContentProps> = () => {
  const token = localStorage.getItem('ryouomoi-checker-token');

  const { data, error } = useFetch<{
    displayName: string
    imageUrl: string
    screenName: string
  }[]>('http://localhost:8080/friends/follower', {
    headers: new Headers({ Authorization: `Bearer ${token}` }),
  });

  if (data) {
    // eslint-disable-next-line
    console.log(data);
  }

  if (error) {
    // eslint-disable-next-line
    console.error(error);
  }

  if (!data) {
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

type SearchPageHeaderProps = {
  Tab: React.VFC
};

const SearchPageHeader: React.VFC<SearchPageHeaderProps> = ({
  Tab,
}) => {
  const { SearchInput } = useSearchInput();
  return (
    <header className="searchPage__header">
      <Header>
        <>
          <div style={{ display: 'inline-block' }}>
            <BackIcon />
          </div>
          <div style={{ display: 'inline-block', flexGrow: 3 }}>
            <SearchInput />
          </div>
          <Tab />
        </>
      </Header>
    </header>
  );
};

const SearchPage: React.VFC = () => {
  const { Tab } = useTab();
  return (
    <div className="searchPage">
      <SearchPageHeader Tab={Tab} />
      <SearchPageMainContent
        users={(
        new Array(Math.random() < 0.5 ? 0 : 30).fill({
          name: '会津夏菜子',
          image: 'https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg',
          id: '@kanako',
        })
      )}
      />
    </div>
  );
};

export default SearchPage;
