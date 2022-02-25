import React from 'react';
import { Link } from 'react-router-dom';
import '../../common.css';
import './homePage.css';
import Header from '../../components/Header/Header';
import AddButton from '../../components/AddButton/AddButton';
import UserIcon from '../../components/UserIcon/UserIcon';
import leveledSplit, { LoverType } from './leveledSplit';
import LeveledPopupUserList from '../../components/LeveledPopupUserList/LeveledPopupUserList';
import { UserCardsInfo } from '../../components/PopupUserList/PopupUserList';
import useFetchWithAuth from '../../hooks/useFetchWithAuth';
import { baseURL } from '../../env';
import useGetUserInfo from '../../hooks/useGetUserInfo';
import ValidNumber from '../../types/ValidNumber';

const HomePageHeader: React.VFC<{ imageUrl: string }> = ({
  imageUrl,
}) => (
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
        <UserIcon image={imageUrl} size="xs" />
      </div>
    </div>
  </Header>
);

const toValidNumber = (n: number): ValidNumber => {
  if (n === 1 || n === 2 || n === 3 || n === 4 || n === 5) {
    return n;
  }
  return /* とりあえず 1 */ 1;
};

const HomePageContent: React.VFC = () => {
  const { data, error } = useFetchWithAuth<LoverType[]>(`${baseURL}/me/lovers`);

  if (error) {
    console.error(error);
  }

  if (data && data.length !== 0) {
    const leveledLovers: UserCardsInfo[] = leveledSplit(data);
    leveledLovers.reverse();

    return (
      <div className="homePage__main">
        {leveledLovers.map((userCardsInfo, idx) => {
          if (userCardsInfo.length === 0) return null;
          return (
            <LeveledPopupUserList level={toValidNumber(5 - idx)} userCardsInfo={userCardsInfo} />
          );
        })}
      </div>
    );
  }

  return (
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
        </div>
      </div>
    </>
  );
};

const HomePage: React.VFC = () => {
  const me = useGetUserInfo();

  return (
    <>
      <HomePageHeader imageUrl={me?.imageUrl ?? ''} />
      <HomePageContent />
    </>
  );
};

export default HomePage;
