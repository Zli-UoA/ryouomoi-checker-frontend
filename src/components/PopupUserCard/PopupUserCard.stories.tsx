import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PopupUserCard from './PopupUserCard';

export default {
  title: 'Components/PopupUserCard',
  component: PopupUserCard,
} as ComponentMeta<typeof PopupUserCard>;

const Template: ComponentStory<typeof PopupUserCard> = ({ user, id }) => (
  <PopupUserCard user={user} id={id} />
);

export const Add = Template.bind({});
Add.args = {
  user: {
    displayName: 'いえすたにかわadd',
    imageUrl: 'https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg',
    screenName: 'yes_tanikawa_add',
  },
  id: '972404402425245697',
};

export const Edit = Template.bind({});
Edit.args = {
  user: {
    displayName: 'いえすたにかわedit',
    imageUrl: 'https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg',
    screenName: 'yes_tanikawa_edit',
  },
  id: '972404402425245697',
};
