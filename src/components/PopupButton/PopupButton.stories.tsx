import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PopupButton from './PopupButton';

export default {
  title: 'Components/PopupButton',
  component: PopupButton,
} as ComponentMeta<typeof PopupButton>;

const Template: ComponentStory<typeof PopupButton> = ({ label, disabled, onClick }) => (
  <div style={{ background: 'black' }}>
    <PopupButton label={label} disabled={disabled} onClick={onClick} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  label: '恋愛の一歩を踏み出す',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: '破局した',
  disabled: true,
};
