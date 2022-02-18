import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DeleteIcon } from './Icon';

export default {
  title: 'Components/Icon/DeleteIcon',
  component: DeleteIcon,
} as ComponentMeta<typeof DeleteIcon>;

const Template: ComponentStory<typeof DeleteIcon> = () => (
  <div style={{ background: '#000', width: 'auto', height: 'auto' }}>
    <DeleteIcon />
  </div>
);

export const Normal = Template.bind({});
Normal.args = {};
