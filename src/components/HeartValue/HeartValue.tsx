import React from 'react';
import { HeartIcon24 } from '../Icon/Icon';
import '../../common.css';
import './heartValue.css';
import { ValidNumber } from '../HeartRating/useHeartRating';

type HeartValueProps = {
  value: ValidNumber,
};

const HeartValue: React.VFC<HeartValueProps> = ({ value }) => (
  <div className="heartValue">
    <div className="heartValue__icon mg_top-24">
      <HeartIcon24 />
    </div>

    <div className="mg_top-24">
      <div className="color_secondarySolid">
        <div className="heartValue__text">
          {value}
        </div>
      </div>
    </div>
  </div>
);

export default HeartValue;
