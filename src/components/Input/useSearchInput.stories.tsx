import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../common.css';

import useSearchInput from './useSearchInput';

const SearchInputTest: React.VFC = () => {
  const { SearchInput } = useSearchInput(() => {});
  return (
    <div className="bg_primary">
      <SearchInput />
    </div>
  );
};

export default {
  title: 'Components/SearchInput',
  component: SearchInputTest,
} as ComponentMeta<typeof SearchInputTest>;

// eslint-disable-next-line
const Template: ComponentStory<typeof SearchInputTest> = () => <SearchInputTest />;

export const Primary = Template.bind({});
