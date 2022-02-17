import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import WithBackground from './WithBackground';
import Button from '../Button/Button';

export default {
  title: 'Components/WithBackground',
  component: WithBackground,
} as ComponentMeta<typeof WithBackground>;

// eslint-disable-next-line
const Template: ComponentStory<typeof WithBackground> = (args) => <WithBackground {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <div
        style={{
          display: 'inline-block',
        }}
      >
        <Button label="Button" />
      </div>
    </div>
  ),
};
