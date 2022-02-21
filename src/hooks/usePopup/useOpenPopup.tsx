import React, { useState } from 'react';

export type OpenPopupProps = {
  children: JSX.Element
};

type UseOpenPopupProps = () => {
  isOpening: boolean,
  setOpening: React.Dispatch<React.SetStateAction<boolean>>,
  OpenPopup: React.VFC<OpenPopupProps>
};

const useOpenPopup: UseOpenPopupProps = () => {
  const [isOpening, setOpening] = useState(false);

  const openPopupState: VoidFunction = () => {
    setOpening(true);
  };

  const OpenPopup: React.VFC<OpenPopupProps> = ({ children }) => (
    <div role="button" tabIndex={0} onClick={openPopupState}>
      {children}
    </div>
  );

  return {
    isOpening,
    setOpening,
    OpenPopup,
  };
};

export default useOpenPopup;
