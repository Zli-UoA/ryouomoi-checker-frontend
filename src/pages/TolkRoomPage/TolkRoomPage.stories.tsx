import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TolkRoomPage from './TolkRoomPage';

export default {
  title: 'Example/TolkRoomPage',
  component: TolkRoomPage,
} as ComponentMeta<typeof TolkRoomPage>;

// eslint-disable-next-line
const Template: ComponentStory<typeof TolkRoomPage> = (args) => <TolkRoomPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
