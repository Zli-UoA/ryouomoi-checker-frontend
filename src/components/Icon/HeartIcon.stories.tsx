import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HeartIcon } from './Icon';

export default {
  title: 'Components/Icon/HeartIcon',
  component: HeartIcon,
} as ComponentMeta<typeof HeartIcon>;

const Template: ComponentStory<typeof HeartIcon> = ({ mode }) => (
  <div style={{ background: '#000', width: 'auto', height: 'auto' }}>
    <HeartIcon mode={mode} />
  </div>
);

export const Normal = Template.bind({});
Normal.args = {};

export const Empty = Template.bind({});
Empty.args = {
  mode: 'empty',
};

export const Broken = Template.bind({});
Broken.args = {
  mode: 'broken',
};

export const Filled = Template.bind({});
Filled.args = {
  mode: 'filled',
};
