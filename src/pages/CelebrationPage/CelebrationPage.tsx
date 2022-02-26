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
import redirect from '../../lib/redirect';
import User from '../../types/User';

const CelebrationPage: React.VFC = () => {
  const { data } = useFetchWithAuth<{
    user: User;
    talkRoomUrl: string
  }>(`${baseURL}/me/lover`);

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
                image={data?.user?.imageUrl ?? ''}
              />
            </div>
            <p className="celebrationPage__name">{data?.user?.displayName}</p>
            <p className="celebrationPage__id">{data?.user?.screenName}</p>
          </>
        </WithBackground>
      </div>
      <p className="celebrationPage__text">両想いになりました！</p>
      <div className="celebrationPage__button">
        <Button
          label="恋愛の一歩を踏み出す"
          disabled={data === undefined}
          onClick={() => redirect(data?.talkRoomUrl ?? '')}
        />
      </div>
    </div>
  );
};

export default CelebrationPage;
