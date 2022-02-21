import React from 'react';
import './usePopup.css';
import '../../common.css';
import UserIcon from '../../components/UserIcon/UserIcon';
import useHeartRating, { ValidNumber } from '../../components/HeartRating/useHeartRating';

type PopupProps = {
  isOpening: boolean,
  setOpening: React.Dispatch<React.SetStateAction<boolean>>
};

type UsePopupProps = () => {
  selectedHeartsCount: ValidNumber,
  Popup: React.VFC<PopupProps>
};

const usePopup: UsePopupProps = () => {
  const { selectedHeartsCount, HeartRating } = useHeartRating();

  const Popup: React.VFC<PopupProps> = ({ isOpening, setOpening }) => {
    type VoidFunction = () => void;
    const closePopup: VoidFunction = () => {
      setOpening(false);
    };

    if (isOpening) {
      return (
        <div className="popup__overlay" role="button" tabIndex={0} onClick={closePopup}>
          <div className="popup__content" role="button" tabIndex={0} onClick={(e) => e.stopPropagation()}>
            <div className="bg_primary">
              <UserIcon size="md" image="https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg" />

              <div className="popup__name">
                会津京子
              </div>

              <div className="popup__id">
                @kyoko
              </div>

              <HeartRating />

              <button type="button" onClick={closePopup}>
                close
              </button>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return {
    selectedHeartsCount,
    Popup,
  };
};

export default usePopup;
