import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HeartIcon } from './Icon';

export default {
  title: 'Components/Icon/HeartIcon',
  component: HeartIcon,
} as ComponentMeta<typeof HeartIcon>;

const Template: ComponentStory<typeof HeartIcon> = ({ filled, broken }) => (
  <div style={{ background: '#000', width: 'auto', height: 'auto' }}>
    <HeartIcon filled={filled} broken={broken} />
  </div>
);

export const Normal = Template.bind({});
Normal.args = {};

export const Broken = Template.bind({});
Broken.args = {
  broken: true,
};

export const Filled = Template.bind({});
Filled.args = {
  filled: true,
};
