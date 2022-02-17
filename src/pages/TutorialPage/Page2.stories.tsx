import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Page2 from './Page2';

export default {
  title: 'Pages/tutorial/Page2',
  component: Page2,
} as ComponentMeta<typeof Page2>;

const Template: ComponentStory<typeof Page2> = () => <Page2 />;

export const Normal = Template.bind({});
Normal.args = {};
