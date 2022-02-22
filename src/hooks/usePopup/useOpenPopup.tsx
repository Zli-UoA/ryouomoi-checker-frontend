import React, { useState } from 'react';

export type OpenPopupProps = {
  children: JSX.Element
};

type UseOpenPopup = () => {
  isOpen: boolean,
  setOpening: React.Dispatch<React.SetStateAction<boolean>>,
  OpenPopup: React.VFC<OpenPopupProps>
};

const useOpenPopup: UseOpenPopup = () => {
  const [isOpen, setOpening] = useState(false);

  const openPopupState: VoidFunction = () => {
    setOpening(true);
  };

  const OpenPopup: React.VFC<OpenPopupProps> = ({ children }) => (
    <div role="button" tabIndex={0} onClick={openPopupState}>
      {children}
    </div>
  );

  return {
    isOpen,
    setOpening,
    OpenPopup,
  };
};

export default useOpenPopup;
