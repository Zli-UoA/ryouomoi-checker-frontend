import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Page1 from './Page1';

export default {
  title: 'Pages/tutorial/Page1',
  component: Page1,
} as ComponentMeta<typeof Page1>;

// eslint-disable-next-line
const Template: ComponentStory<typeof Page1> = (args) => <Page1 {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
