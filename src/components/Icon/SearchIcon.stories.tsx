import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SearchIcon } from './Icon';

export default {
  title: 'Component/Icon/SearchIcon',
  component: SearchIcon,
} as ComponentMeta<typeof SearchIcon>;

// eslint-disable-next-line
const Template: ComponentStory<typeof SearchIcon> = (args) => <SearchIcon {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
