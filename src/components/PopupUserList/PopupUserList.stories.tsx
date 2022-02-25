import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PopupUserList from './PopupUserList';

export default {
  title: 'Components/PopupUserList',
  component: PopupUserList,
} as ComponentMeta<typeof PopupUserList>;

const Template: ComponentStory<typeof PopupUserList> = ({ userCardsInfo }) => (
  <PopupUserList userCardsInfo={userCardsInfo} />
);

export const AddCards = Template.bind({});
AddCards.args = {
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

export const EditCards = Template.bind({});
EditCards.args = {
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
