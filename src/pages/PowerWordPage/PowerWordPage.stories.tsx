import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PowerWordPage from './PowerWordPage';

export default {
  title: 'Example/PowerWordPage',
  component: PowerWordPage,
} as ComponentMeta<typeof PowerWordPage>;

// eslint-disable-next-line
const Template: ComponentStory<typeof PowerWordPage> = (args) => <PowerWordPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
