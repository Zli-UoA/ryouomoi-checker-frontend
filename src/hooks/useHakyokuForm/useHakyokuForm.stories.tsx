import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import useHakyokuForm from './useHakyokuForm';

const HakyokuFormTest: React.VFC = () => {
  const {
    reason, selected, HakyokuForm,
  } = useHakyokuForm();

  return (
    <>
      <HakyokuForm />
      <p>{`理由はこれ！${reason}`}</p>
      <p>
        {selected ? 'ありがとう' : '選んでね'}
      </p>
    </>
  );
};

export default {
  title: 'hooks/useHakyokuForm',
  component: HakyokuFormTest,
} as ComponentMeta<typeof HakyokuFormTest>;

const Template: ComponentStory<typeof HakyokuFormTest> = () => <HakyokuFormTest />;

export const Test = Template.bind({});
