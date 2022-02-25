import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../common.css';

import HeartRating from './HeartRating';

export default {
  title: 'Components/HeartRating',
  component: HeartRating,
} as ComponentMeta<typeof HeartRating>;

const Template: ComponentStory<typeof HeartRating> = ({ selectedCount, setHeartsCount }) => (
  <HeartRating selectedCount={selectedCount} setHeartsCount={setHeartsCount} />
);

export const InitCount1 = Template.bind({});
InitCount1.args = {
  selectedCount: 1,
  setHeartsCount: () => {},
};

export const InitCount2 = Template.bind({});
InitCount2.args = {
  selectedCount: 2,
  setHeartsCount: () => {},
};

export const InitCount3 = Template.bind({});
InitCount3.args = {
  selectedCount: 3,
  setHeartsCount: () => {},
};

export const InitCount4 = Template.bind({});
InitCount4.args = {
  selectedCount: 4,
  setHeartsCount: () => {},
};

export const InitCount5 = Template.bind({});
InitCount5.args = {
  selectedCount: 5,
  setHeartsCount: () => {},
};
