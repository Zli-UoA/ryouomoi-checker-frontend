import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LeveledUserList from './LeveledUserList';

export default {
  title: 'Components/LeveledUserList',
  component: LeveledUserList,
} as ComponentMeta<typeof LeveledUserList>;

const Template: ComponentStory<typeof LeveledUserList> = ({ level, users }) => (
  <LeveledUserList level={level} users={users} />
);

export const Normal1 = Template.bind({});
Normal1.args = {
  level: 1,
  users: [
    {
      displayName: 'たにかわなおや',
      imageUrl: 'https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg',
      screenName: 'yes_tanikawa',
    },
    {
      displayName: 'たにかわなおや2',
      imageUrl: 'https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg',
      screenName: 'yes_tanikawa2',
    },
  ],
};

export const Normal2 = Template.bind({});
Normal2.args = {
  level: 5,
  users: [
    {
      displayName: 'たにかわなおや',
      imageUrl: 'https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg',
      screenName: 'yes_tanikawa',
    },
    {
      displayName: 'たにかわなおや2',
      imageUrl: 'https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg',
      screenName: 'yes_tanikawa2',
    },
    {
      displayName: 'たにかわなおや3',
      imageUrl: 'https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg',
      screenName: 'yes_tanikawa3',
    },
  ],
};
