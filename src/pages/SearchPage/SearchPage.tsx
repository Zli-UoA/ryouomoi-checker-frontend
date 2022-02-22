import React, { useRef } from 'react';
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

type UseSearchPageHeader = (Tab: React.VFC) => ({
  result: React.MutableRefObject<User[]>;
  SearchPageHeader: React.VFC;
});

type UseOnEnter = () => {
  result: React.MutableRefObject<User[]>;
  onEnter: OnEnter;
};

const useOnEnter: UseOnEnter = () => {
  const result = useRef<User[]>([]);

  const onEnter: OnEnter = async (inputRef) => {
    const token = localStorage.getItem('ryouomoi-checker-token');

    const res = await fetch(
      `http://localhost:8080/friends/search?query=${inputRef.current?.value}`,
      {
        headers: new Headers({ Authorization: `Bearer ${token}` }),
      },
    );

    result.current = await res.json();
    // eslint-disable-next-line
  console.log(result)
  };

  return {
    result, onEnter,
  };
};

const useSearchPageHeader: UseSearchPageHeader = (Tab) => {
  const { result, onEnter } = useOnEnter();

  const { SearchInput } = useSearchInput(onEnter);

  return ({
    result,
    SearchPageHeader: () => (
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
    ),
  });
};

const SearchPage: React.VFC = () => {
  const { Tab, selectedTab } = useTab();
  const { result, SearchPageHeader } = useSearchPageHeader(Tab);

  // eslint-disable-next-line
  console.log('result', result);

  if (selectedTab === 'all') {
    return (
      <div className="searchPage">
        <SearchPageHeader />
        <AllTabContent data={result.current} />
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
