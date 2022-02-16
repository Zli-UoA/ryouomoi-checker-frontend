import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DeleteIcon } from './Icon';

export default {
  title: 'Components/Icon/DeleteIcon',
  component: DeleteIcon,
} as ComponentMeta<typeof DeleteIcon>;

// eslint-disable-next-line
const Template: ComponentStory<typeof DeleteIcon> = (args) => <DeleteIcon {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
