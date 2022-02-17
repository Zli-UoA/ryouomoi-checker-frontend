import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TalkRoomPage from './TalkRoomPage';

export default {
  title: 'Pages/TalkRoomPage',
  component: TalkRoomPage,
} as ComponentMeta<typeof TalkRoomPage>;

// eslint-disable-next-line
const Template: ComponentStory<typeof TalkRoomPage> = (args) => <TalkRoomPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
