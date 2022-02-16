import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchPage from './SearchPage';

export default {
  title: 'Pages/SearchPage',
  component: SearchPage,
} as ComponentMeta<typeof SearchPage>;

// eslint-disable-next-line
const Template: ComponentStory<typeof SearchPage> = (args) => <SearchPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
