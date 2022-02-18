import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AddIcon } from './Icon';

export default {
  title: 'Components/Icon/AddIcon',
  component: AddIcon,
} as ComponentMeta<typeof AddIcon>;

const Template: ComponentStory<typeof AddIcon> = () => (
  <div style={{ background: '#000', width: 'auto', height: 'auto' }}>
    <AddIcon />
  </div>
);

export const Normal = Template.bind({});
Normal.args = {};
