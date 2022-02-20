import React from 'react';
import { Link } from 'react-router-dom';
import '../../common.css';
import './homePage.css';
import Header from '../../components/Header/Header';
import AddButton from '../../components/AddButton/AddButton';
import UserIcon from '../../components/UserIcon/UserIcon';

const HomePageHeader: React.VFC = () => (
  <Header>
    <div className="homePage__header">
      <Link to="/search">
        <AddButton />
      </Link>

      <div>
        <div className="homePage__title">
          両想いチェッカー
        </div>
      </div>

      <div>
        <UserIcon image="https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg" size="xs" />
      </div>
    </div>
  </Header>
);

const HomePageContent: React.VFC = () => (
  <>
    {/* 空のdivだが、ヘッダーが position: fixed なためヘッダー分(64px)を調整 */}
    <div style={{ height: '64px' }} />
    <div className="mg_top-80">
      <div className="homePage__text">
        <p>
          左上の「＋」から

          <br />

          <span className="homePage__secondaryText">
            好きな相手
          </span>

          を登録しよう
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        a
      </div>
    </div>
  </>
);

const HomePage: React.VFC = () => (
  <>
    <HomePageHeader />
    <HomePageContent />
  </>
);

export default HomePage;
