import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../common.css';
import UserCard from '../../pages/SearchPage/UserCard';

import usePopup from './usePopup';

type UsePopupTestProps = {
  displayName: string,
  imageUrl: string,
  screenName: string,
  mode: 'Add' | 'Edit'
};

const UsePopupTest: React.VFC<UsePopupTestProps> = ({
  displayName, imageUrl, screenName, mode,
}) => {
  const {
    isOpen,
    selectedHeartsCount,
    OpenPopup,
    Popup,
  } = usePopup(imageUrl, displayName, screenName, mode);

  return (
    <>
      <OpenPopup>
        <UserCard
          displayName={displayName}
          imageUrl={imageUrl}
          screenName={screenName}
        />
      </OpenPopup>

      <div className="bg_primary">
        <Popup />
      </div>

      {selectedHeartsCount}
      {isOpen}
    </>
  );
};

export default {
  title: 'Components/usePopup',
  component: UsePopupTest,
} as ComponentMeta<typeof UsePopupTest>;

const Template: ComponentStory<typeof UsePopupTest> = ({
  displayName, imageUrl, screenName, mode,
}) => (
  <UsePopupTest
    displayName={displayName}
    imageUrl={imageUrl}
    screenName={screenName}
    mode={mode}
  />
);

export const AddMode = Template.bind({});
AddMode.args = {
  displayName: 'いえすたにかわ',
  imageUrl: 'https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg',
  screenName: 'Aizu Taro',
  mode: 'Add',
};

export const EditMode = Template.bind({});
EditMode.args = {
  displayName: 'いえすたにかわ',
  imageUrl: 'https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg',
  screenName: 'Aizu Taro',
  mode: 'Edit',
};
