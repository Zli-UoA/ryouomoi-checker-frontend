import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AddIcon } from './Icon';

export default {
  title: 'Components/Icon/AddIcon',
  component: AddIcon,
} as ComponentMeta<typeof AddIcon>;

// eslint-disable-next-line
const Template: ComponentStory<typeof AddIcon> = (args) => <AddIcon {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
