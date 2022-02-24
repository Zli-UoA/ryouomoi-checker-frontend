import React from 'react';
import './usePopup.css';
import '../../common.css';
import UserIcon from '../../components/UserIcon/UserIcon';
import { ValidNumber } from '../../components/HeartRating/useHeartRating';
import usePopupTrigger, { PopupTriggerProps } from './usePopupTrigger';
import useLovePoint from '../useLovePoint/useLovePoint';
import PopupButton from '../../components/PopupButton/PopupButton';
import DeleteButton from '../../components/DeleteButton/DeleteButton';

type UsePopup = (
  imageUrl: string,
  displayName: string,
  screenName: string,
  id: string,
  mode: 'Add' | 'Edit'
) => {
  isOpen: boolean,
  selectedCount: ValidNumber,
  PopupTrigger: React.VFC<PopupTriggerProps>,
  Popup: React.VFC
};

const usePopup: UsePopup = (imageUrl, displayName, screenName, id, mode) => {
  const {
    postLovePoint,
    lovePoint: oldLovePoint,
    selectedCount,
    HeartRating,
  } = useLovePoint(id);

  // const { selectedCount, HeartRating } = useHeartRating(oldLovePoint);

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
            {/* displayName と userIcon の間が 12px なので、popup__displayName で margin-top を使っている */}
            <div className="popup__displayName">
              {displayName}
            </div>
          </div>

          <div className="mg_top-8">
            <div className="popup__commonFont">
              <div className="popup__screenName">
                {screenName}
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
                disabled={mode === 'Add' ? false : selectedCount === oldLovePoint}
                onClick={() => { postLovePoint(selectedCount); closePopup(); }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return {
    isOpen,
    selectedCount,
    PopupTrigger,
    Popup,
  };
};

export default usePopup;
