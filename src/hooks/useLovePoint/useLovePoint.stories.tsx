import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../common.css';

import useLovePoint from './useLovePoint';

type UseLovePointTestProps = {
  id: string
};

const UseLovePointTest: React.VFC<UseLovePointTestProps> = ({ id }) => {
  const {
    usePostLovePoint,
    lovePoint: oldLovePoint,
  } = useLovePoint(id);

  return (
    <div>
      {`old     lovePoint is ${oldLovePoint}`}

      <button type="button" onClick={usePostLovePoint(3)}>
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

// このidは @yt8492 の内部id
export const Normal = Template.bind({});
Normal.args = {
  id: '972404402425245697',
};
