import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { BackIcon } from '../../components/Icon/Icon';
import useSearchInput from '../../components/Input/useSearchInput';
import '../../common.css';
import useTab from '../../hooks/useTab/useTab';
import './searchPage.css';
import FolloweeTabContent from './FolloweeTabContent';
import FollowerTabContent from './FollowerTabContent';
import AllTabContent from './AllTabContent';

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
  );
};

const SearchPage: React.VFC = () => {
  const { Tab, selectedTab } = useTab();

  if (selectedTab === 'all') {
    return (
      <div className="searchPage">
        <SearchPageHeader Tab={Tab} />
        <AllTabContent />
      </div>
    );
  }

  if (selectedTab === 'follow') {
    return (
      <div className="searchPage">
        <SearchPageHeader Tab={Tab} />
        <FolloweeTabContent />
      </div>
    );
  }

  return (
    <div className="searchPage">
      <SearchPageHeader Tab={Tab} />
      <FollowerTabContent />
    </div>
  );
};

export default SearchPage;
