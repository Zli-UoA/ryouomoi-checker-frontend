import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HakyokuProcess from './HakyokuProcessPage';

export default {
  title: 'Pages/HakyokuProcess',
  component: HakyokuProcess,
} as ComponentMeta<typeof HakyokuProcess>;

// eslint-disable-next-line
const Template: ComponentStory<typeof HakyokuProcess> = (args) => <HakyokuProcess {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
