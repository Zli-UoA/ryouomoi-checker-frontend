import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../../common.css';
import DeleteButton from './DeleteButton';

export default {
  title: 'Components/DeleteButton',
  component: DeleteButton,
} as ComponentMeta<typeof DeleteButton>;

const Template: ComponentStory<typeof DeleteButton> = ({ onClick }) => (
  <div className="bg_primary">
    <DeleteButton onClick={onClick} />
  </div>
);

export const Normal = Template.bind({});
Normal.args = {};

export const Alert = Template.bind({});
Alert.args = {
  onClick: () => { alert('hello!'); },
};
