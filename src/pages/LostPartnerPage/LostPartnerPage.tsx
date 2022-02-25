import React from 'react';
import { Link } from 'react-router-dom';
import '../../common.css';
import './lostPartnerPage.css';
import WithBackground from '../../components/WithBackground/WithBackground';
import UserIcon from '../../components/UserIcon/UserIcon';
import { HeartIcon } from '../../components/Icon/Icon';
import useFetchWithAuth from '../../hooks/useFetchWithAuth';
import User from '../../types/User';
import { baseURL } from '../../env';

const LostPartnerPage: React.VFC = () => {
  const { data } = useFetchWithAuth<User>(`${baseURL}/me/lover`);

  if (data === undefined) return null;

  return (
    <div className="lostPartnerPage">
      <Link to="/hakyoku">
        <button className="lostPartnerPage__heartButton" type="button">
          <HeartIcon mode="broken" />
        </button>
      </Link>
      <div className="">
        <WithBackground>
          <>
            <div className="lostPartnerPage__icon">
              <UserIcon
                size="lg"
                image={data.imageUrl}
              />
            </div>
            <p className="lostPartnerPage__name">{data.displayName}</p>
            <p className="lostPartnerPage__id">{data.screenName}</p>
          </>
        </WithBackground>
      </div>
      <p className="lostPartnerPage__mainText">
        が
        <span className="color_secondarySolid">破局手続き</span>
        を行いました
      </p>
      <p className="lostPartnerPage__subText">
        右上のアイコンから手続きを
        <br />
        進めてください
      </p>
    </div>
  );
};

export default LostPartnerPage;
