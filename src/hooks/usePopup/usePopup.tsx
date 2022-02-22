import React from 'react';
import './usePopup.css';
import '../../common.css';
import UserIcon from '../../components/UserIcon/UserIcon';
import useHeartRating, { ValidNumber } from '../../components/HeartRating/useHeartRating';
import usePopupTrigger, { PopupTriggerProps } from './usePopupTrigger';
import PopupButton from '../../components/PopupButton/PopupButton';
import DeleteButton from '../../components/DeleteButton/DeleteButton';

type UsePopup = (
  imageUrl: string,
  userName: string,
  userId: string,
  mode: 'Add' | 'Edit'
) => {
  isOpen: boolean,
  selectedHeartsCount: ValidNumber,
  PopupTrigger: React.VFC<PopupTriggerProps>,
  Popup: React.VFC
};

const usePopup: UsePopup = (imageUrl, userName, userId, mode) => {
  const { selectedHeartsCount, HeartRating } = useHeartRating();

  const {
    isOpen,
    closePopup,
    PopupTrigger,
  } = usePopupTrigger();

  const StatefulDeleteButton: React.VFC = () => {
    if (mode === 'Add') return null;

    return (
      <div className="popup__deleteButton">
        <DeleteButton />
      </div>
    );
  };

  const Popup: React.VFC = () => {
    if (!isOpen) return null;

    return (
      <div className="popup__overlay" role="button" tabIndex={0} onClick={closePopup}>
        <div className="popup__content" role="button" tabIndex={0} onClick={(e) => e.stopPropagation()}>

          <div className="mg_top-24">
            <div className="popup__userIcon">
              <UserIcon size="md" image={imageUrl} />
            </div>
          </div>

          <StatefulDeleteButton />

          <div className="popup__commonFont">
            {/* userName と userIcon の間が 12px なので、popup__userName で margin-top を使っている */}
            <div className="popup__userName">
              {userName}
            </div>
          </div>

          <div className="mg_top-8">
            <div className="popup__commonFont">
              <div className="popup__userId">
                {userId}
              </div>
            </div>
          </div>

          <div className="mg_top-24 mg_right-24 mg_left-24">
            <HeartRating />
          </div>

          <div className="mg_top-24 mg_bottom-24 mg_left-24 mg_right-24">
            <div className="popup__buttonGroup">

              <PopupButton label="キャンセル" onClick={closePopup} />

              <PopupButton
                label={mode === 'Add' ? '追加' : '更新'}
                onClick={closePopup}
              />

              {/* TODO: mode によって動作が変化するコンポーネントの作成
              isUpdatedLovePoint: usePostとかのカスタムフックで返ってくる予定のもの
              postLovePoint: usePostとかのカスタムフックで返ってくる予定のもの

              <PopupButton
                label={mode === 'Add' ? '追加' : '更新'}
                disabled={mode === 'Add' ? true : isUpdatedLovePoint}
                onClick={postLovePoint}
              />
              */}

            </div>
          </div>
        </div>
      </div>
    );
  };

  return {
    isOpen,
    selectedHeartsCount,
    PopupTrigger,
    Popup,
  };
};

export default usePopup;
