import React from 'react';
import Button from '../../components/Button/Button';
import '../../common.css';
import './Page1.css';

const Page1: React.VFC = () => (
  <div className="page1">
    <div className="page1__text ">
      <p>
        「両思いチェッカー」は
        <br />
        <span className="color_primarySolid">
          両思いの相手
        </span>
        とだけ
        <br />
        安心して繋がれる
        <br />
        マッチングアプリです
      </p>
    </div>
    <div className="page1__button">
      <Button label="次へ" />
    </div>
  </div>
);

export default Page1;
