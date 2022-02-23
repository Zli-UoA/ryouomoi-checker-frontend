import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../common.css';
import { ValidNumber } from '../../components/HeartRating/useHeartRating';

import useLovePoint from './useLovePoint';

type UseLovePointTestProps = {
  id: string
};

const UseLovePointTest: React.VFC<UseLovePointTestProps> = ({ id }) => {
  const {
    postLovePoint,
    lovePoint: oldLovePoint,
  } = useLovePoint(id);

  const [lovePoint, setLovePoint] = useState<ValidNumber>(oldLovePoint);

  type VoidFunction = () => void;
  const updateLovePoint: VoidFunction = () => {
    postLovePoint(3);
    setLovePoint(3);
  };

  return (
    <div>
      {`current lovePoint is ${lovePoint}`}
      {`old     lovePoint is ${oldLovePoint}`}

      <button type="button" onClick={updateLovePoint}>
        post!
      </button>
    </div>
  );
};

export default {
  title: 'Hooks/UseLovePoint',
  component: UseLovePointTest,
} as ComponentMeta<typeof UseLovePointTest>;

const Template: ComponentStory<typeof UseLovePointTest> = ({ id }) => (
  <UseLovePointTest id={id} />
);

export const Normal = Template.bind({});
Normal.args = {};
