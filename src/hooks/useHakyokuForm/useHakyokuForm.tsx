import React, { useState } from 'react';
import RadioButton from '../../components/RadioButton/RadioButton';
import './useHakyokuForm.css';

export type ReasonId = 1 | 2 | 3 | 4 | 5 | 6;

type UseHakyokuForm = () => {
  reason: string | undefined;
  reasonId: ReasonId | undefined,
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

  const toReasonId = (r: string | undefined): ReasonId => {
    switch (r) {
      case reasons[0]:
        return 1;
      case reasons[1]:
        return 2;
      case reasons[2]:
        return 3;
      case reasons[3]:
        return 4;
      case reasons[4]:
        return 5;
      case reasons[5]:
        return 6;
      default:
        return 1;
    }
  };

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
    reason,
    reasonId: toReasonId(reason),
    selected: reason !== undefined,
    HakyokuForm,
  };
};

export default useHakyokuForm;
