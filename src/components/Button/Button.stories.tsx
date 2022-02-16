import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// eslint-disable-next-line
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: '恋愛の一歩を踏み出す',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: '破局した',
  disabled: true,
};
