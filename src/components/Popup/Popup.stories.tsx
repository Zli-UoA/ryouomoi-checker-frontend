import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../common.css';
import UserCard from '../UserCard/UserCard';
import useOpen from '../../hooks/useOpen';
import Popup from './Popup';
import useHeartRating from '../../hooks/useHeartRating';

type UsePopupTestProps = {
  displayName: string,
  imageUrl: string,
  screenName: string,
  id: string,
  mode: 'Add' | 'Edit'
};

const UsePopupTest: React.VFC<UsePopupTestProps> = ({
  displayName, imageUrl, screenName, id,
}) => {
  const { isOpen, open, close } = useOpen();
  const { rating, setRating } = useHeartRating();
  return (
    <>
      <button type="button" onClick={open}>
        <UserCard
          displayName={displayName}
          imageUrl={imageUrl}
          screenName={screenName}
        />
      </button>

      <div className="bg_primary">
        <Popup
          isOpen={isOpen}
          primaryAction={close}
          setHeartRating={setRating}
          heartRating={rating}
          user={{
            displayName, imageUrl, screenName, id,
          }}
          cancelAction={close}
          deleteAction={close}
        />
      </div>

      {rating}
      {isOpen}
    </>
  );
};

export default {
  title: 'Components/usePopup',
  component: UsePopupTest,
} as ComponentMeta<typeof UsePopupTest>;

const Template: ComponentStory<typeof UsePopupTest> = ({
  displayName, imageUrl, screenName, id, mode,
}) => (
  <UsePopupTest
    displayName={displayName}
    imageUrl={imageUrl}
    screenName={screenName}
    id={id}
    mode={mode}
  />
);

export const AddMode = Template.bind({});
AddMode.args = {
  displayName: 'いえすたにかわ',
  imageUrl: 'https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg',
  screenName: 'Aizu Taro',
  id: '972404402425245697',
};

export const EditMode = Template.bind({});
EditMode.args = {
  displayName: 'いえすたにかわ',
  imageUrl: 'https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg',
  screenName: 'Aizu Taro',
  id: '972404402425245697',
};
