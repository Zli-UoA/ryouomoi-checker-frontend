import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CheckIcon } from './Icon';

export default {
  title: 'Components/Icon/CheckIcon',
  component: CheckIcon,
} as ComponentMeta<typeof CheckIcon>;

const Template: ComponentStory<typeof CheckIcon> = ({ isEnabled }) => (
  <CheckIcon isEnabled={isEnabled} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Enabled = Template.bind({});
Enabled.args = {
  isEnabled: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  isEnabled: false,
};
