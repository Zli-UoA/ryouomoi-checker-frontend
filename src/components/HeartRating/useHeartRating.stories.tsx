import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../common.css';

import useHeartRating, { ValidNumber } from './useHeartRating';

type HeartRatingTestProps = {
  initCount?: ValidNumber
};

const HeartRatingTest: React.VFC<HeartRatingTestProps> = ({ initCount }) => {
  const {
    selectedCount,
    clearCount,
    HeartRating,
  } = useHeartRating(initCount);

  return (
    <div className="bg_primary">
      <HeartRating />

      <p>
        selectedCount is
        {selectedCount}
      </p>

      <button type="button" onClick={clearCount}>
        clearCount!
      </button>
    </div>
  );
};

export default {
  title: 'Components/HeartRating',
  component: HeartRatingTest,
} as ComponentMeta<typeof HeartRatingTest>;

const Template: ComponentStory<typeof HeartRatingTest> = ({ initCount }) => (
  <HeartRatingTest initCount={initCount} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const InitCount1 = Template.bind({});
InitCount1.args = {
  initCount: 1,
};

export const InitCount2 = Template.bind({});
InitCount2.args = {
  initCount: 2,
};

export const InitCount3 = Template.bind({});
InitCount3.args = {
  initCount: 3,
};

export const InitCount4 = Template.bind({});
InitCount4.args = {
  initCount: 4,
};

export const InitCount5 = Template.bind({});
InitCount5.args = {
  initCount: 5,
};
