import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HeartIcon } from './Icon';

export default {
  title: 'Component/Icon/HeartIcon',
  component: HeartIcon,
} as ComponentMeta<typeof HeartIcon>;

// eslint-disable-next-line
const Template: ComponentStory<typeof HeartIcon> = (args) => <HeartIcon {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Broken = Template.bind({});
Broken.args = {
  broken: true,
};

export const Filled = Template.bind({});
Filled.args = {
  filled: true,
};
