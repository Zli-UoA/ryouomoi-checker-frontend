import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from './Header';
import { AddIcon } from '../Icon/Icon';
import UserIcon from '../UserIcon/UserIcon';

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

// eslint-disable-next-line
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: (
    <div
      style={{
        display: 'flex',
      }}
    >
      <AddIcon />
      <input
        style={{
          height: '30px',
        }}
      />
      <UserIcon
        image="https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg"
        size="xs"
      />
    </div>
  ),
};
