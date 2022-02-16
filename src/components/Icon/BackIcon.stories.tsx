import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BackIcon } from './Icon';

export default {
  title: 'Components/Icon/BackIcon',
  component: BackIcon,
} as ComponentMeta<typeof BackIcon>;

// eslint-disable-next-line
const Template: ComponentStory<typeof BackIcon> = (args) => <BackIcon {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
