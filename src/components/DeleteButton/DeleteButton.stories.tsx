import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../../common.css';
import DeleteButton from './DeleteButton';

export default {
  title: 'Components/DeleteButton',
  component: DeleteButton,
} as ComponentMeta<typeof DeleteButton>;

const Template: ComponentStory<typeof DeleteButton> = () => (
  <div className="bg_primary">
    <DeleteButton />
  </div>
);

export const Normal = Template.bind({});
Normal.args = {};
