import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SendIcon } from './Icon';

export default {
  title: 'Components/Icon/SendIcon',
  component: SendIcon,
} as ComponentMeta<typeof SendIcon>;

const Template: ComponentStory<typeof SendIcon> = () => (
  <div style={{ background: '#000', width: 'auto', height: 'auto' }}>
    <SendIcon />
  </div>
);

export const Normal = Template.bind({});
Normal.args = {};
