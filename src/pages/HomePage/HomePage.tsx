import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFetch } from 'usehooks-ts';
import useQuery from '../../hooks/useQuery';
import '../../common.css';
import './homePage.css';
import Header from '../../components/Header/Header';
import AddButton from '../../components/AddButton/AddButton';
import UserIcon from '../../components/UserIcon/UserIcon';
import leveledSplit, { LoverType } from './leveledSplit';
import LeveledPopupUserList from '../../components/LeveledPopupUserList/LeveledPopupUserList';
import { UserCardsInfo } from '../../components/PopupUserList/PopupUserList';
import { ValidNumber } from '../../components/HeartRating/useHeartRating';

const useNavigateToWelcome = (): void => {
  const navigate = useNavigate();
  const query = useQuery();
  useEffect(() => {
    const token = query.get('auth_token');
    if (token) {
      navigate(`/welcome?auth_token=${token}`);
    }
  }, [navigate, query]);
};

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

const toValidNumber = (n: number): ValidNumber => {
  if (n === 1 || n === 2 || n === 3 || n === 4 || n === 5) {
    return n;
  }
  return /* とりあえず 1 */ 1;
};

const HomePageContent: React.VFC = () => {
  const baseURL = 'http://localhost:8080';
  const token = localStorage.getItem('ryouomoi-checker-token');
  const { data, error } = useFetch<LoverType[]>(`${baseURL}/me/lovers/`, {
    method: 'GET',
    mode: 'no-cors',
    headers: new Headers({ Authorization: `Bearer ${token}` }),
  });

  if (error) {
    console.error(error);
  }

  if (data && data.length !== 0) {
    const leveledLovers: UserCardsInfo[] = leveledSplit(data);
    leveledLovers.reverse();

    return (
      <div>
        {leveledLovers.map((userCardsInfo, idx) => {
          if (userCardsInfo.length === 0) return null;
          return (
            <LeveledPopupUserList level={toValidNumber(idx + 1)} userCardsInfo={userCardsInfo} />
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
  useNavigateToWelcome();
  return (
    <>
      <HomePageHeader />
      <HomePageContent />
    </>
  );
};

export default HomePage;
