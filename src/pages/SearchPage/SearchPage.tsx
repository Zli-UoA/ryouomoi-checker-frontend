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

type TabName = 'all' | 'follow' | 'follower';

type UseTab = () => {
  Tab: React.VFC,
  selectedTab: TabName
};

const useTab: UseTab = () => {
  const [selectedTab, setTab] = useState<TabName>('all');
  const genSetTab = (target: TabName): (() => void) => () => {
    if (selectedTab === target) return;
    setTab(target);
  };

  const Tab: React.VFC = () => (
    <div className="tab">
      <button
        type="button"
        onClick={genSetTab('all')}
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
        onClick={genSetTab('follow')}
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
        onClick={genSetTab('follower')}
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

  return { Tab, selectedTab };
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
