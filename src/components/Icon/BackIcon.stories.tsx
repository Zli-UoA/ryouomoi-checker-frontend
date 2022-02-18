import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BackIcon } from './Icon';

export default {
  title: 'Components/Icon/BackIcon',
  component: BackIcon,
} as ComponentMeta<typeof BackIcon>;

const Template: ComponentStory<typeof BackIcon> = () => (
  <div style={{ background: '#000', width: 'auto', height: 'auto' }}>
    <BackIcon />
  </div>
);

export const Normal = Template.bind({});
Normal.args = {};
