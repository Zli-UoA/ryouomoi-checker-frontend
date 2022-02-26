import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import AddButton from '../../components/AddButton/AddButton';
import UserIcon from '../../components/UserIcon/UserIcon';
import leveledSplit from './leveledSplit';
import useFetchWithAuth from '../../hooks/useFetchWithAuth';
import { baseURL } from '../../env';
import useGetUserInfo from '../../hooks/useGetUserInfo';
import Lover from '../../types/Lover';
import User from '../../types/User';
import redirect from '../../lib/redirect';
import LeveledUsers from '../../components/LeveledUsers/LeveledUsers';
import toValidNumber from '../../lib/toValidNumber';
import '../../common.css';
import './homePage.css';

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

const parseData = (res: Lover[]): Required<User>[] => res.map(({ user, lovePoint }) => ({
  lovePoint, ...user,
}));

const HomePageContent: React.VFC = () => {
  const { data, error } = useFetchWithAuth<Lover[]>(`${baseURL}/me/lovers`);

  if (error) {
    console.error(error);
  }

  const { statusCode } = useFetchWithAuth(`${baseURL}/me/lover`);
  if (statusCode === 200) {
    redirect('/celebration');
  }

  if (data && data.length !== 0) {
    const leveledLovers: User[][] = leveledSplit(parseData(data));
    leveledLovers.reverse();

    return (
      <div className="homePage__main">
        <div className="leveledUsersList">
          {leveledLovers.map((leveledUsers, idx) => {
            if (leveledUsers.length === 0) return null;
            return (
              <LeveledUsers level={toValidNumber(5 - idx)} users={leveledUsers} />
            );
          })}
        </div>
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
