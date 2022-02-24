import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { BackIcon } from '../../components/Icon/Icon';
import useSearchInput, { OnEnter } from '../../components/Input/useSearchInput';
import '../../common.css';
import useTab from '../../hooks/useTab/useTab';
import './searchPage.css';
import FolloweeTabContent from './FolloweeTabContent';
import FollowerTabContent from './FollowerTabContent';
import AllTabContent from './AllTabContent';
import User from '../../types/User';

type UseSearchPageHeader = (Tab: React.VFC, onEnter: OnEnter) => ({
  SearchPageHeader: React.VFC;
});

type UseOnEnter = () => {
  result: User[];
  onEnter: OnEnter;
};

const useOnEnter: UseOnEnter = () => {
  const [result, setResult] = useState<User[]>([]);

  const onEnter: OnEnter = async (inputRef) => {
    const token = localStorage.getItem('ryouomoi-checker-token');
    if (inputRef.current?.value === '') {
      return;
    }

    const query = inputRef.current?.value;
    const res = await fetch(
      `https://ryouomoichecker.yt8492.com/api/friends/search?query=${query}`,
      {
        headers: new Headers({ Authorization: `Bearer ${token}` }),
      },
    );

    setResult(await res.json());
  };

  return {
    result, onEnter,
  };
};

const useSearchPageHeader: UseSearchPageHeader = (Tab, onEnter) => {
  const { SearchInput } = useSearchInput(onEnter);

  return ({
    SearchPageHeader: () => (
      <header className="searchPage__header">
        <Header>
          <>
            <Link to="/home">
              <div style={{ display: 'inline-block' }}>
                <BackIcon />
              </div>
            </Link>
            <div style={{ display: 'inline-block', flexGrow: 3 }}>
              <SearchInput />
            </div>
            <Tab />
          </>
        </Header>
      </header>
    ),
  });
};

const SearchPage: React.VFC = () => {
  const { Tab, selectedTab } = useTab();
  const { result, onEnter } = useOnEnter();
  const { SearchPageHeader } = useSearchPageHeader(Tab, onEnter);

  // eslint-disable-next-line
  console.log('result', result);

  if (selectedTab === 'all') {
    return (
      <div className="searchPage">
        <SearchPageHeader />
        <AllTabContent data={result} />
      </div>
    );
  }

  if (selectedTab === 'follow') {
    return (
      <div className="searchPage">
        <SearchPageHeader />
        <FolloweeTabContent />
      </div>
    );
  }

  return (
    <div className="searchPage">
      <SearchPageHeader />
      <FollowerTabContent />
    </div>
  );
};

export default SearchPage;
