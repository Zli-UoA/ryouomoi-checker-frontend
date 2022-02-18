import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HammerHeartIcon } from './Icon';

export default {
  title: 'Components/Icon/HammerHeartIcon',
  component: HammerHeartIcon,
} as ComponentMeta<typeof HammerHeartIcon>;

const Template: ComponentStory<typeof HammerHeartIcon> = () => (
  <HammerHeartIcon />
);

export const Normal = Template.bind({});
Normal.args = {};
