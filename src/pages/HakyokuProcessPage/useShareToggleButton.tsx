import React, { useState } from 'react';
import { CheckIcon } from '../../components/Icon/Icon';
import './shareToggleButton.css';

type UseShareToggleButton = () => {
  checked: boolean;
  ShareToggleButton: React.VFC;
};

const useShareToggleButton: UseShareToggleButton = () => {
  const [checked, check] = useState<boolean>(false);
  const toggleCheck = (): void => check(!checked);

  return {
    checked,
    ShareToggleButton: () => (
      <button
        type="button"
        className="shareToggleButton"
        onClick={toggleCheck}
      >
        <div className="shareToggleButton__check">
          <CheckIcon isEnabled={checked} />
        </div>
        <div className="shareToggleButton__text">
          <h2 className="shareToggleButton__title">公式Twitterで破局を報告する</h2>
          <p className="shareToggleButton__description">双方がチェックマークをつけた時に限り、「両思いチェッカー」の公式アカウントがツイートします</p>
        </div>
      </button>
    ),
  };
};

export default useShareToggleButton;
