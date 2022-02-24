import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RadioButton from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = ({
  label, selected, onClick,
}) => <RadioButton label={label} selected={selected} onClick={onClick} />;

export const Unselected = Template.bind({});
Unselected.args = {
  label: '洗濯してないよー',
  selected: false,
  onClick: () => {},
};

export const Selected = Template.bind({});
Unselected.args = {
  label: '洗濯してないよー',
  selected: true,
  onClick: () => {},
};
