import React from 'react';
import './usePopup.css';
import '../../common.css';
import UserIcon from '../../components/UserIcon/UserIcon';
import useHeartRating, { ValidNumber } from '../../components/HeartRating/useHeartRating';
import PopupButton from '../../components/PopupButton/PopupButton';
import DeleteButton from '../../components/DeleteButton/DeleteButton';

type User = {
  imageUrl: string,
  displayName: string,
  screenName: string,
  id: string,
  lovePoint?: number,
};

type UsePopupProps = {
  user: User,
  isOpen: boolean,
  primaryAction?: () => void,
  deleteAction?: () => void,
  cancelAction?: () => void,
};

type UsePopup = ({
  user, isOpen, primaryAction, deleteAction, cancelAction,
}: UsePopupProps) => {
  selectedCount: ValidNumber,
  Popup: React.VFC
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

const usePopup: UsePopup = ({
  user, isOpen,
  primaryAction = () => {},
  deleteAction = () => {},
  cancelAction = () => {},
}) => {
  const { selectedCount, HeartRating } = useHeartRating();

  const Popup: React.VFC = () => {
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
            <HeartRating />
          </div>

          <div className="mg_top-40">
            <div className="popup__buttonGroup">
              <PopupButton label="キャンセル" onClick={cancelAction} />

              <PopupButton
                label={user.lovePoint ? '更新' : '好き！'}
                disabled={user.lovePoint
                  ? selectedCount === user.lovePoint
                  : false}
                onClick={primaryAction}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return {
    selectedCount,
    Popup,
  };
};

export default usePopup;
