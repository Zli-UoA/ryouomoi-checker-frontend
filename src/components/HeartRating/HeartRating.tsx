import React from 'react';
import './useHeartRating.css';
import { HeartIcon40 } from '../Icon/Icon';

export type ValidNumber = 1 | 2 | 3 | 4 | 5;

type HeartRatingProps = {
  selectedCount: ValidNumber
  setHeartsCount: (num: ValidNumber) => void
};

const HeartRating: React.VFC<HeartRatingProps> = ({ selectedCount, setHeartsCount }) => {
  const isSelected = (index: ValidNumber): 'filled' | 'empty' => (
    index <= selectedCount
      ? 'filled'
      : 'empty'
  );

  return (
    <div className="heartRating">
      <div className="heartRating__inner mg_left-8">
        <button
          className="heartRating__button"
          type="button"
          onClick={() => setHeartsCount(1)}
        >
          <HeartIcon40 mode={isSelected(1)} />
        </button>
        <button
          className="heartRating__button"
          type="button"
          onClick={() => setHeartsCount(2)}
        >
          <HeartIcon40 mode={isSelected(2)} />
        </button>
        <button
          className="heartRating__button"
          type="button"
          onClick={() => setHeartsCount(3)}
        >
          <HeartIcon40 mode={isSelected(3)} />
        </button>
        <button
          className="heartRating__button"
          type="button"
          onClick={() => setHeartsCount(4)}
        >
          <HeartIcon40 mode={isSelected(4)} />
        </button>
        <button
          className="heartRating__button"
          type="button"
          onClick={() => setHeartsCount(5)}
        >
          <HeartIcon40 mode={isSelected(5)} />
        </button>
      </div>
    </div>
  );
};

export default HeartRating;
