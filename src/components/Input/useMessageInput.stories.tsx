import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../common.css';

import useMessageInput from './useMessageInput';

const MessageInputTest: React.VFC = () => {
  const { MessageInput } = useMessageInput();
  return (
    <div className="bg_primary">
      <MessageInput />
    </div>
  );
};

export default {
  title: 'Components/MessageInput',
  component: MessageInputTest,
} as ComponentMeta<typeof MessageInputTest>;

// eslint-disable-next-line
const Template: ComponentStory<typeof MessageInputTest> = () => <MessageInputTest />;

export const Primary = Template.bind({});
