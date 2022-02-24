import React from 'react';
import '../../common.css';
import './HakyokuProcessPage.css';
import { Link } from 'react-router-dom';
import UserIcon from '../../components/UserIcon/UserIcon';
import Header from '../../components/Header/Header';
import { BackIcon } from '../../components/Icon/Icon';

const HakyokuProcessPageHeader: React.VFC = () => (
  <Header>
    <div className="hakyokuProcessPage__header">
      <Link to="/celebration">
        <BackIcon />
      </Link>
      <div>
        <div className="hakyokuProcessPage__title">
          破局手続き
        </div>
      </div>

      <div>
        <UserIcon image="https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg" size="xs" />
      </div>
    </div>
  </Header>
);

const HakhyokuProcessPageContent: React.VFC = () => (
  <>
    {/* 空のdivだが、ヘッダーが position: fixed なためヘッダー分(64px)を調整 */}
    <div style={{ height: '64px' }} />
    <div className="mg_top-80" />
  </>
);

const HakyokuProcessPage: React.VFC = () => (
  <div className="hakyokuProcessPage">
    <HakyokuProcessPageHeader />
    <HakhyokuProcessPageContent />
  </div>
);

export default HakyokuProcessPage;
