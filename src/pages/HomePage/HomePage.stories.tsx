import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HomePage from './HomePage';

export default {
  title: 'Example/HomePage',
  component: HomePage,
} as ComponentMeta<typeof HomePage>;

// eslint-disable-next-line
const Template: ComponentStory<typeof HomePage> = (args) => <HomePage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
