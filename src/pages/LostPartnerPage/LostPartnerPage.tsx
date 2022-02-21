import React, { useState } from 'react';
import usePopup from '../../hooks/usePopup/usePopup';

const LostPartnerPage: React.VFC = () => {
  const [isOpening, setOpening] = useState(false);
  const { Popup } = usePopup();

  type VoidFunction = () => void;
  const openPopup: VoidFunction = () => {
    setOpening(true);
  };

  return (
    <div>
      <button type="button" onClick={openPopup}>
        Click
      </button>
      <Popup isOpening={isOpening} setOpening={setOpening} />
    </div>
  );
};

export default LostPartnerPage;
