import React from 'react';
import Button from '../../components/Button/Button';
import '../../common.css';
import './powerWordPage.css';
import WithBackground from '../../components/WithBackground/WithBackground';
import useFetchWithAuth from '../../hooks/useFetchWithAuth';
import { baseURL } from '../../env';

const makeMessage = (remainDays: number | undefined): string => {
  if (remainDays === undefined) return '数日後にまた利用できます';
  return `${remainDays}日後にまた利用できます`;
};

const PowerWordPageTopContent: React.VFC = () => (
  <WithBackground>
    <>
      <p className="powerWordPage__powerWord">恋をして恋を失った方が、一度も恋をしなかったよりマシである</p>
      <p className="powerWordPage__name">アルフレッド・テニスン</p>
      <p className="powerWordPage__discription">(19世紀イギリスの詩人／1809 ~ 1892)</p>
    </>
  </WithBackground>
);

type ButtomContentProps = {
  statusCode: number | undefined,
  remainDays: number | undefined,
};

const PowerWordPageButtomContent: React.VFC<ButtomContentProps> = ({ remainDays, statusCode }) => {
  const tooEarly = 425;
  if (statusCode === tooEarly) {
    return (
      <div className="powerWordPage__buttomContent--tooEarly">
        <Button label="新しい恋を始める" disabled />
        <div className="mg_top-24">
          <div className="powerWordPage__buttomContent--text">
            {makeMessage(remainDays)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="powerWordPage__buttomContent--active">
      <Button label="新しい恋を始める" />
    </div>
  );
};

const PowerWordPage: React.VFC = () => {
  const { data, statusCode } = useFetchWithAuth<{
    message: string,
    remainDays: number,
  }>(`${baseURL}/me/lover`);

  return (
    <div className="powerWordPage">
      <PowerWordPageTopContent />
      <div className="powerWordPage__buttomContent">
        <PowerWordPageButtomContent remainDays={data?.remainDays} statusCode={statusCode} />
      </div>
    </div>
  );
};

export default PowerWordPage;
