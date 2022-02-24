import React from 'react';
import '../../common.css';
import './lostPartnerPage.css';
import WithBackground from '../../components/WithBackground/WithBackground';
import UserIcon from '../../components/UserIcon/UserIcon';
import { HeartIcon } from '../../components/Icon/Icon';

const LostPartnerPage: React.VFC = () => (
  <div className="lostPartnerPage">
    <button className="lostPartnerPage__heartButton" type="button">
      <HeartIcon mode="broken" />
    </button>
    <div className="">
      <WithBackground>
        <>
          <div className="lostPartnerPage__icon">
            <UserIcon
              size="lg"
              image="https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg"
            />
          </div>
          <p className="lostPartnerPage__name">会津太郎</p>
          <p className="lostPartnerPage__id">@aizu_taro</p>
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

export default LostPartnerPage;
