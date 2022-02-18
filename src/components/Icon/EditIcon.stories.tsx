import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EditIcon } from './Icon';

export default {
  title: 'Components/Icon/EditIcon',
  component: EditIcon,
} as ComponentMeta<typeof EditIcon>;

const Template: ComponentStory<typeof EditIcon> = () => (
  <div style={{ background: '#000', width: 'auto', height: 'auto' }}>
    <EditIcon />
  </div>
);

export const Normal = Template.bind({});
Normal.args = {};
