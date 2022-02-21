import React, { useState } from 'react';
import './useHeartRating.css';
import { HeartIcon } from '../Icon/Icon';

export type ValidNumber = 1 | 2 | 3 | 4 | 5;

type UseHeartRating = () => {
  selectedHeartsCount: ValidNumber;
  HeartRating: React.VFC;
};

const useHeartRating: UseHeartRating = () => {
  const [selectedHeartsCount, setHeartsCount] = useState<ValidNumber>(1);

  const isSelected = (index: ValidNumber): 'filled' | 'empty' => (index <= selectedHeartsCount ? 'filled' : 'empty');

  const HeartRating: React.VFC = () => (
    <div className="heartRating">
      <button className="heartRating__button" type="button" onClick={() => setHeartsCount(1)}>
        <HeartIcon mode={isSelected(1)} />
      </button>
      <button className="heartRating__button" type="button" onClick={() => setHeartsCount(2)}>
        <HeartIcon mode={isSelected(2)} />
      </button>
      <button className="heartRating__button" type="button" onClick={() => setHeartsCount(3)}>
        <HeartIcon mode={isSelected(3)} />
      </button>
      <button className="heartRating__button" type="button" onClick={() => setHeartsCount(4)}>
        <HeartIcon mode={isSelected(4)} />
      </button>
      <button className="heartRating__button" type="button" onClick={() => setHeartsCount(5)}>
        <HeartIcon mode={isSelected(5)} />
      </button>
    </div>
  );

  return {
    selectedHeartsCount,
    HeartRating,
  };
};

export default useHeartRating;
