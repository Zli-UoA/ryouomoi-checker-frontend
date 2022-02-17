import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import UserIcon from './UserIcon';

export default {
  title: 'Components/UserIcon',
  component: UserIcon,
} as ComponentMeta<typeof UserIcon>;

// eslint-disable-next-line
const Template: ComponentStory<typeof UserIcon> = (args) => <UserIcon {...args} />;

export const Mediam = Template.bind({});
Mediam.args = {
  image: 'https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg',
  size: 'md',
};

export const Small = Template.bind({});
Small.args = {
  image: 'https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg',
  size: 'sm',
};

export const Lerge = Template.bind({});
Lerge.args = {
  image: 'https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg',
  size: 'lg',
};

export const XSmall = Template.bind({});
XSmall.args = {
  image: 'https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg',
  size: 'xs',
};

export const XXSmall = Template.bind({});
XXSmall.args = {
  image: 'https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg',
  size: 'xxs',
};
