import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import UserCard from './UserCard';

export default {
  title: 'Components/UserCard',
  component: UserCard,
} as ComponentMeta<typeof UserCard>;

const Template: ComponentStory<typeof UserCard> = ({ displayName, imageUrl, screenName }) => (
  <UserCard displayName={displayName} imageUrl={imageUrl} screenName={screenName} />
);

export const Normal = Template.bind({});
Normal.args = {
  displayName: 'たにかわなおや',
  imageUrl: 'https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg',
  screenName: 'yes_tanikawa',
};

export const Long = Template.bind({});
Long.args = {
  displayName: 'たにかわなおやあああああああああああああああああああああああああああああ',
  imageUrl: 'https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg',
  screenName: 'yes_tanikawa',
};

export const Long2 = Template.bind({});
Long2.args = {
  displayName: '1234567890123456789012345678901234567890',
  imageUrl: 'https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg',
  screenName: 'yes_tanikawa',
};

export const Long3 = Template.bind({});
Long3.args = {
  displayName: 'OK',
  imageUrl: 'https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg',
  screenName: '1234567890123456789012345678901234567890123456789012345678901234567890',
};
