import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CheckIcon } from './Icon';

export default {
  title: 'Components/Icon/CheckIcon',
  component: CheckIcon,
} as ComponentMeta<typeof CheckIcon>;

// eslint-disable-next-line
const Template: ComponentStory<typeof CheckIcon> = (args) => <CheckIcon {...args} />;

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
