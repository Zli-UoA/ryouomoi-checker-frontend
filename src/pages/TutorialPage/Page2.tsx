import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import '../../common.css';
import './Page2.css';

const Page2: React.VFC = () => (
  <div className="page2">
    <div className="page2__text">
      <p>
        {/* 1行目 */}
        5段階で
        <span className="color_primarySolid">
          好き度
        </span>
        を登録し
        <br />

        {/* 2行目 */}
        好き度の合計が6以上になった
        <br />

        {/* 3行目 */}
        1人とマッチします
      </p>
    </div>
    <div className="page2__button">
      <Link to="/welcome">
        <Button label="Twitterで登録" />
      </Link>
    </div>
  </div>
);

export default Page2;
