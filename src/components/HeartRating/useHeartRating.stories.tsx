import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../common.css';

import useHeartRating from './useHeartRating';

const HeartRatingTest: React.VFC = () => {
  const { selectedHeartsCount, HeartRating } = useHeartRating();
  return (
    <div className="bg_primary">
      <HeartRating />
      {selectedHeartsCount}
    </div>
  );
};

export default {
  title: 'Components/HeartRating',
  component: HeartRatingTest,
} as ComponentMeta<typeof HeartRatingTest>;

// eslint-disable-next-line
const Template: ComponentStory<typeof HeartRatingTest> = () => <HeartRatingTest />;

export const Primary = Template.bind({});
