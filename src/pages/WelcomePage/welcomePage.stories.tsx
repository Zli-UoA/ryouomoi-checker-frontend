import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import WelcomePage from './WelcomePage';

export default {
  title: 'Example/WelcomePage',
  component: WelcomePage,
} as ComponentMeta<typeof WelcomePage>;

// eslint-disable-next-line
const Template: ComponentStory<typeof WelcomePage> = (args) => <WelcomePage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
