import React from 'react';
import Button from '../../components/Button/Button';
import '../../common.css';
import './powerWordPage.css';
import WithBackground from '../../components/WithBackground/WithBackground';

const PowerWordPage: React.VFC = () => (
  <div className="powerWordPage">
    <div className="">
      <WithBackground>
        <>
          <p className="powerWordPage__powerWord">恋をして恋を失った方が、一度も恋をしなかったよりマシである</p>
          <p className="powerWordPage__name">アルフレッド・テニスン</p>
          <p className="powerWordPage__discription">(19世紀イギリスの詩人／1809 ~ 1892)</p>
        </>
      </WithBackground>
    </div>
    <div className="powerWordPage__button">
      <Button label="恋愛の一歩を踏み出す" />
    </div>
  </div>
);

export default PowerWordPage;
