import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HeartValue from './HeartValue';

export default {
  title: 'Components/HeartValue',
  component: HeartValue,
} as ComponentMeta<typeof HeartValue>;

const Template: ComponentStory<typeof HeartValue> = ({ value }) => (
  <div style={{ background: 'black' }}>
    <HeartValue value={value} />
  </div>
);

export const Normal1 = Template.bind({});
Normal1.args = {
  value: 1,
};

export const Normal2 = Template.bind({});
Normal2.args = {
  value: 2,
};

export const Normal3 = Template.bind({});
Normal3.args = {
  value: 3,
};

export const Normal4 = Template.bind({});
Normal4.args = {
  value: 4,
};

export const Normal5 = Template.bind({});
Normal5.args = {
  value: 5,
};
