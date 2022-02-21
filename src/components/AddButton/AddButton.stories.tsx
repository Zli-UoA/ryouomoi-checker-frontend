import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../../common.css';
import AddButton from './AddButton';

export default {
  title: 'Components/AddButton',
  component: AddButton,
} as ComponentMeta<typeof AddButton>;

const Template: ComponentStory<typeof AddButton> = () => (
  <div className="bg_primary">
    <AddButton />
  </div>
);

export const Normal = Template.bind({});
Normal.args = {};
