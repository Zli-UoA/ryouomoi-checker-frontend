import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import { BackIcon } from '../../components/Icon/Icon';
import useSearchInput from '../../components/Input/useSearchInput';
import '../../common.css';
import UserIcon from '../../components/UserIcon/UserIcon';

type User = {
  name: string,
  image: string,
  id: string
};

type SearchPageMainContentProps = {
  users: User[]
};

const SearchPageMainContent: React.VFC<SearchPageMainContentProps> = ({ users }) => {
  if (users.length === 0) {
    return (
      <main className="searchPage__main">
        <div>
          <span className="color_primarysolid">検索ボックス</span>
          に
          <br />
          キーワードを入力してください
        </div>
      </main>
    );
  }

  return (
    <main className="searchPage__main">
      {
        users.map(({ name, image, id }) => (
          <div style={{ display: 'flex' }}>
            <UserIcon size="sm" image={image} />
            <div>
              <h3>{name}</h3>
              <p>{id}</p>
            </div>
          </div>
        ))
      }
    </main>
  );
};

type TabName = 'all' | 'follow' | 'follower';
type VoidFunc = () => void;

type SearchPageHeaderProps = {
  selectedTab: TabName,
  setAll: VoidFunc,
  setFollow: VoidFunc,
  setFollower: VoidFunc,
};

const Tab: React.VFC<SearchPageHeaderProps> = ({
  selectedTab, setFollow, setFollower, setAll,
}) => (
  <div className="tab">
    <button
      type="button"
      onClick={setAll}
      className={
        selectedTab === 'all'
          ? 'tab__button--selected'
          : 'tab__button'
      }
    >
      全体
    </button>
    <button
      type="button"
      onClick={setFollow}
      className={
        selectedTab === 'follow'
          ? 'tab__button--selected'
          : 'tab__button'
      }
    >
      フォロー
    </button>
    <button
      type="button"
      onClick={setFollower}
      className={
        selectedTab === 'follower'
          ? 'tab__button--selected'
          : 'tab__button'
      }
    >
      フォロワー
    </button>
  </div>

);

const SearchPageHeader: React.VFC<SearchPageHeaderProps> = ({
  selectedTab, setAll, setFollower, setFollow,
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
          <Tab
            selectedTab={selectedTab}
            setAll={setAll}
            setFollow={setFollow}
            setFollower={setFollower}
          />
        </>
      </Header>
    </header>
  );
};

const SearchPage: React.VFC = () => {
  const [selectedTab, setTab] = useState<'all' | 'follow' | 'follower'>('all');
  const setAll: VoidFunc = () => {
    if (selectedTab === 'all') return;
    setTab('all');
  };
  const setFollow: VoidFunc = () => {
    if (selectedTab === 'follow') return;
    setTab('follow');
  };
  const setFollower: VoidFunc = () => {
    if (selectedTab === 'follower') return;
    setTab('follower');
  };

  return (
    <div className="searchPage">
      <SearchPageHeader
        selectedTab={selectedTab}
        setAll={setAll}
        setFollow={setFollow}
        setFollower={setFollower}
      />
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
