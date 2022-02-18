import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SearchIcon } from './Icon';

export default {
  title: 'Components/Icon/SearchIcon',
  component: SearchIcon,
} as ComponentMeta<typeof SearchIcon>;

const Template: ComponentStory<typeof SearchIcon> = () => (
  <div style={{ background: '#000', width: 'auto', height: 'auto' }}>
    <SearchIcon />
  </div>
);

export const Normal = Template.bind({});
Normal.args = {};
