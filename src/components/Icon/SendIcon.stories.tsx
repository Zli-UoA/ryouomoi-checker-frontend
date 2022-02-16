import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SendIcon } from './Icon';

export default {
  title: 'Components/Icon/SendIcon',
  component: SendIcon,
} as ComponentMeta<typeof SendIcon>;

// eslint-disable-next-line
const Template: ComponentStory<typeof SendIcon> = (args) => <SendIcon {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
