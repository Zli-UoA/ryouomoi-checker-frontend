import React, { useState } from 'react';
import RadioButton from '../../components/RadioButton/RadioButton';
import './useHakyokuForm.css';

type UseHakyokuForm = () => {
  reason: string | undefined;
  selected: boolean;
  HakyokuForm: React.VFC;
};

const useHakyokuForm: UseHakyokuForm = () => {
  const [reason, setReason] = useState<string | undefined>(undefined);

  const genSetReason = (target: string) => () => setReason(target);

  const reasons = [
    '価値観の違い',
    '趣味・趣向の違い',
    '冷めた・嫌いになった',
    '他に好きな人ができた',
    '自然消滅',
    'その他',
  ];

  const HakyokuForm: React.VFC = () => (
    <div className="hakyokuForm">
      <div className="hakyokuForm__inner">
        <h1 className="hakyokuForm__title">
          破局理由を教えてください
        </h1>
        {
          reasons.map((r) => (
            <RadioButton
              label={r}
              onClick={genSetReason(r)}
              selected={r === reason}
            />
          ))
        }
      </div>
    </div>
  );

  return {
    reason, selected: reason !== undefined, HakyokuForm,
  };
};

export default useHakyokuForm;
