import React from 'react';
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
      <div style={{ paddingTop: '200px' }}>
        <div>
          <span className="color_primarysolid">検索ボックス</span>
          に
          <br />
          キーワードを入力してください
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '200px' }}>
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
    </div>
  );
};

const SearchPageHeader: React.VFC = () => {
  const { SearchInput } = useSearchInput();
  return (
    <div style={{ display: 'box' }}>
      <Header>
        <>
          <BackIcon />
          <SearchInput />
        </>
      </Header>
    </div>
  );
};

const SearchPage: React.VFC = () => (
  <div>
    <SearchPageHeader />
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

export default SearchPage;
