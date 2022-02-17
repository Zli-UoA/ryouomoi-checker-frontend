import React from 'react';
import Button from '../../components/Button/Button';
import '../../common.css';
import './welcomePage.css';
import WithBackground from '../../components/WithBackground/WithBackground';
import UserIcon from '../../components/UserIcon/UserIcon';

const Page1: React.VFC = () => (
  <div className="welcomePage">
    <div className="">
      <WithBackground>
        <>
          <div className="welcomePage__icon">
            <UserIcon
              size="lg"
              image="https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg"
            />
          </div>
          <p className="welcomePage__name">会津太郎</p>
          <p className="welcomePage__id">@aizu_taro</p>
        </>
      </WithBackground>
    </div>
    <p className="welcomePage__welcome">ようこそ</p>
    <div className="welcomePage__button">
      <Button label="恋愛の一歩を踏み出す" />
    </div>
  </div>
);

export default Page1;
