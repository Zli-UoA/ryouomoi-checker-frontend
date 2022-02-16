import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EditIcon } from './Icon';

export default {
  title: 'Component/Icon/EditIcon',
  component: EditIcon,
} as ComponentMeta<typeof EditIcon>;

// eslint-disable-next-line
const Template: ComponentStory<typeof EditIcon> = (args) => <EditIcon {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
