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
import { UserCardsInfo } from '../../components/PopupUserList/PopupUserList';
import fetchWithAuth from '../../lib/fetchWithAuth';
import { baseURL } from '../../env';

type UseSearchPageHeader = (Tab: React.VFC, onEnter: OnEnter) => ({
  SearchPageHeader: React.VFC;
});

type UseOnEnter = () => {
  result: UserCardsInfo;
  onEnter: OnEnter;
};

const useOnEnter: UseOnEnter = () => {
  const [result, setResult] = useState<UserCardsInfo>([]);

  const onEnter: OnEnter = async (inputRef) => {
    if (inputRef.current?.value === '') return;

    const query = inputRef.current?.value;
    type DataType = {
      id: string,
      displayName: string,
      imageUrl: string,
      screenName: string,
    };

    const data: DataType[] = await fetchWithAuth<DataType[]>(`${baseURL}/friends/search?query=${query}`);
    const userCardsInfo: UserCardsInfo = new Array(data.length);

    for (let i = 0; i < data.length; i += 1) {
      const {
        id,
        displayName,
        imageUrl,
        screenName,
      } = data[i];

      userCardsInfo[i] = {
        user: {
          displayName,
          imageUrl,
          screenName,
        },
        id,
        mode: 'Add',
      };
    }

    setResult(userCardsInfo);
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
            <div className="searchPage__IconAndInput">
              <div className="searchPage__headerIcon mg_left-16 mg_right-16">
                <Link to="/home">
                  <BackIcon />
                </Link>
              </div>
              <div className="searchPage__input mg_right-16">
                <SearchInput />
              </div>
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
