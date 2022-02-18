import React from 'react';
import Button from '../../components/Button/Button';
import '../../common.css';
import './CelebrationPage.css';
import WithBackground from '../../components/WithBackground/WithBackground';
import UserIcon from '../../components/UserIcon/UserIcon';

const CelebrationPage: React.VFC = () => (
  <div className="celebrationPage">
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
      <Button label="恋愛の一歩を踏み出す" />
    </div>
  </div>
);

export default CelebrationPage;
