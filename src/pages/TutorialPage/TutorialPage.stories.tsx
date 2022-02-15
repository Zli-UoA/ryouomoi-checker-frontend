import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TutorialPage from './TutorialPage';

export default {
  title: 'Pages/TutorialPage',
  component: TutorialPage,
} as ComponentMeta<typeof TutorialPage>;

// eslint-disable-next-line
const Template: ComponentStory<typeof TutorialPage> = (args) => <TutorialPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
