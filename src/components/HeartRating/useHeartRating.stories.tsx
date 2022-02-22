import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../common.css';

import useHeartRating from './useHeartRating';

const HeartRatingTest: React.VFC = () => {
  const {
    selectedCount,
    clearCount,
    HeartRating,
  } = useHeartRating();
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

const Template: ComponentStory<typeof HeartRatingTest> = () => <HeartRatingTest />;

export const Normal = Template.bind({});
