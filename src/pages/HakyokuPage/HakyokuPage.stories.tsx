import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HakyokuPage from './HakyokuPage';

export default {
  title: 'Pages/HakyokuPage',
  component: HakyokuPage,
} as ComponentMeta<typeof HakyokuPage>;

// eslint-disable-next-line
const Template: ComponentStory<typeof HakyokuPage> = (args) => <HakyokuPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
