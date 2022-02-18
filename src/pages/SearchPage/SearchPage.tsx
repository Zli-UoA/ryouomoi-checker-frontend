import React from 'react';
import Header from '../../components/Header/Header';
import { BackIcon } from '../../components/Icon/Icon';
import useSearchInput from '../../components/Input/useSearchInput';
import '../../common.css';
import useTab from '../../hooks/useTab/useTab';
import UserCard from './UserCard';

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
          <UserCard name={name} image={image} id={id} />
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
