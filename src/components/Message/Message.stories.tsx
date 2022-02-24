import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Message from './Message';

export default {
  title: 'Components/Message',
  component: Message,
} as ComponentMeta<typeof Message>;

// eslint-disable-next-line
const Template: ComponentStory<typeof Message> = (args) => <Message {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  content: '好きです',
  color: 'primary',
};

export const Gray = Template.bind({});
Gray.args = {
  content: '好きです',
  color: 'gray',
};
