import React from 'react';
import '../../common.css';
import './HakyokuPage.css';
import WithBackground from '../../components/WithBackground/WithBackground';
import UserIcon from '../../components/UserIcon/UserIcon';
import { HeartIcon } from '../../components/Icon/Icon';

const HakyokuPage: React.VFC = () => (
  <div className="hakyokuPage">
    <button className="hakyokuPage__heartButton" type="button">
      <HeartIcon mode="broken" />
    </button>
    <div className="">
      <WithBackground>
        <>
          <div className="hakyokuPage__icon">
            <UserIcon
              size="lg"
              image="https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg"
            />
          </div>
          <p className="hakyokuPage__name">会津太郎</p>
          <p className="hakyokuPage__id">@aizu_taro</p>
        </>
      </WithBackground>
    </div>
    <p className="hakyokuPage__mainText">
      が
      <span className="color_secondarySolid">破局手続き</span>
      を行いました
    </p>
    <p className="hakyokuPage__subText">
      右上のアイコンから手続きを
      <br />
      進めてください
    </p>
  </div>
);

export default HakyokuPage;