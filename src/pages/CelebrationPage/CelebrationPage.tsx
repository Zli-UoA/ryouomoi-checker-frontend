import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import '../../common.css';
import './CelebrationPage.css';
import WithBackground from '../../components/WithBackground/WithBackground';
import UserIcon from '../../components/UserIcon/UserIcon';
import HammerHeartButton from './HammerHeartButton';
import useFetchWithAuth from '../../hooks/useFetchWithAuth';
import { baseURL } from '../../env';

const redirect = (url: string): void => {
  window.location.href = url;
};

const StatefulButton: React.VFC = () => {
  type DataType = {
    talkRoomUrl: string,
  };
  const { data } = useFetchWithAuth<DataType>(`${baseURL}/me/lover`, {
    method: 'GET',
  });

  if (data === undefined) {
    return <Button label="恋愛の一歩を踏み出す" disabled />;
  }
  return <Button label="恋愛の一歩を踏み出す" disabled={false} onClick={() => { redirect(data.talkRoomUrl); }} />;
};

const CelebrationPage: React.VFC = () => {
  const { statusCode } = useFetchWithAuth(`${baseURL}/me/lover`);
  if (statusCode === 404) {
    redirect('/lost-partner');
  }

  return (
    <div className="celebrationPage">
      <Link to="/hakyoku">
        <HammerHeartButton />
      </Link>
      <div className="">
        <WithBackground>
          <>
            <div className="celebrationPage__icon">
              <UserIcon
                size="lg"
                image="https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg"
              />
            </div>
            <p className="celebrationPage__name">会津太郎</p>
            <p className="celebrationPage__id">@aizu_taro</p>
          </>
        </WithBackground>
      </div>
      <p className="celebrationPage__text">両想いになりました！</p>
      <div className="celebrationPage__button">
        <StatefulButton />
      </div>
    </div>
  );
};

export default CelebrationPage;
