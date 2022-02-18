import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CelebrationPage from './CelebrationPage';

export default {
  title: 'Pages/CelebrationPage',
  component: CelebrationPage,
} as ComponentMeta<typeof CelebrationPage>;

const Template: ComponentStory<typeof CelebrationPage> = () => <CelebrationPage />;

export const Primary = Template.bind({});
Primary.args = {};
