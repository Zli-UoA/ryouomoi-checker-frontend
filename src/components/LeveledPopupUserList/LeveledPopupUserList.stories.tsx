import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LeveledPopupUserList from './LeveledPopupUserList';

export default {
  title: 'Components/LeveledPopupUserList',
  component: LeveledPopupUserList,
} as ComponentMeta<typeof LeveledPopupUserList>;

const Template: ComponentStory<typeof LeveledPopupUserList> = ({ level, userCardsInfo }) => (
  <LeveledPopupUserList level={level} userCardsInfo={userCardsInfo} />
);

export const AddCards1 = Template.bind({});
AddCards1.args = {
  level: 1,
  userCardsInfo: [
    {
      user: {
        displayName: 'たにかわなおや',
        imageUrl: 'https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg',
        screenName: 'yes_tanikawa',
      },
      id: '972404402425245697',
      mode: 'Add',
    },
    {
      user: {
        displayName: 'たにかわなおや2',
        imageUrl: 'https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg',
        screenName: 'yes_tanikawa2',
      },
      id: '972404402425245697',
      mode: 'Add',
    },
  ],
};

export const EditCards2 = Template.bind({});
EditCards2.args = {
  level: 5,
  userCardsInfo: [
    {
      user: {
        displayName: 'たにかわなおや',
        imageUrl: 'https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg',
        screenName: 'yes_tanikawa',
      },
      id: '972404402425245697',
      mode: 'Edit',
    },
    {
      user: {
        displayName: 'たにかわなおや2',
        imageUrl: 'https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg',
        screenName: 'yes_tanikawa2',
      },
      id: '972404402425245697',
      mode: 'Edit',
    },
    {
      user: {
        displayName: 'たにかわなおや3',
        imageUrl: 'https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg',
        screenName: 'yes_tanikawa3',
      },
      id: '972404402425245697',
      mode: 'Edit',
    },
  ],
};
