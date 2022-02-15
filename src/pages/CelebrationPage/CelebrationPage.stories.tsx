import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CelebrationPage from './CelebrationPage';

export default {
  title: 'Example/CelebrationPage',
  component: CelebrationPage,
} as ComponentMeta<typeof CelebrationPage>;

// eslint-disable-next-line
const Template: ComponentStory<typeof CelebrationPage> = (args) => <CelebrationPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
