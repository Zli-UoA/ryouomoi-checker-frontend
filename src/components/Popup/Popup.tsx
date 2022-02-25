import React from 'react';
import './usePopup.css';
import '../../common.css';
import DeleteButton from '../DeleteButton/DeleteButton';
import HeartRating, { ValidNumber } from '../HeartRating/HeartRating';
import UserIcon from '../UserIcon/UserIcon';
import PopupButton from '../PopupButton/PopupButton';

type User = {
  imageUrl: string,
  displayName: string,
  screenName: string,
  id: string,
  lovePoint?: number,
};

const StatefulDeleteButton: React.VFC<{
  user: User,
  deleteAction: () => void
}> = ({ user, deleteAction }) => {
  if (!user.lovePoint) return null;

  return (
    <button type="button" className="popup__deleteButton" onClick={deleteAction}>
      <DeleteButton />
    </button>
  );
};

type PopupProps = {
  user: User,
  isOpen: boolean,
  heartRating: ValidNumber,
  setHeartRating: (num: ValidNumber) => void
  primaryAction?: () => void,
  deleteAction?: () => void,
  cancelAction?: () => void,
};

const Popup: React.VFC<PopupProps> = ({
  user,
  isOpen,
  heartRating,
  setHeartRating,
  primaryAction = () => {},
  cancelAction = () => {},
  deleteAction = () => {},
}) => {
  if (!isOpen) return null;

  return (
    <div className="popup__overlay" role="button" tabIndex={0} onClick={cancelAction}>
      <div className="popup__content" role="button" tabIndex={0} onClick={(e) => e.stopPropagation()}>

        <div className="mg_top-24">
          <div className="popup__userIcon">
            <UserIcon size="md" image={user.imageUrl} />
          </div>
        </div>

        <StatefulDeleteButton user={user} deleteAction={deleteAction} />

        <div className="popup__commonFont">
          {/* displayName と userIcon の間が 12px なので、popup__displayName で margin-top を使っている */}
          <div className="popup__displayName">
            {user.displayName}
          </div>
        </div>

        <div className="mg_top-8">
          <div className="popup__commonFont">
            <div className="popup__screenName">
              <a href={`https://twitter.com/${user.screenName}`} target="_blank" rel="noreferrer">
                {user.screenName}
              </a>
            </div>
          </div>
        </div>

        <div className="mg_top-24 mg_right-24 mg_left-24">
          <HeartRating selectedCount={heartRating} setHeartsCount={setHeartRating} />
        </div>

        <div className="mg_top-40">
          <div className="popup__buttonGroup">
            <PopupButton label="キャンセル" onClick={cancelAction} />

            <PopupButton
              label={user.lovePoint ? '更新' : '好き！'}
              disabled={user.lovePoint
                ? heartRating === user.lovePoint
                : false}
              onClick={primaryAction}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
