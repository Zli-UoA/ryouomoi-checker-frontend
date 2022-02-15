import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LostPartnerPage from './LostPartnerPage';

export default {
  title: 'Example/LostPartnerPage',
  component: LostPartnerPage,
} as ComponentMeta<typeof LostPartnerPage>;

// eslint-disable-next-line
const Template: ComponentStory<typeof LostPartnerPage> = (args) => <LostPartnerPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
