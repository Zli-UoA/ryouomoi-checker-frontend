import React, { useState } from 'react';

export type PopupTriggerProps = {
  children: JSX.Element
};

type UsePopupTrigger = () => {
  isOpen: boolean,
  setOpening: React.Dispatch<React.SetStateAction<boolean>>,
  PopupTrigger: React.VFC<PopupTriggerProps>
};

const usePopupTrigger: UsePopupTrigger = () => {
  const [isOpen, setOpening] = useState(false);

  const openPopupState: VoidFunction = () => {
    setOpening(true);
  };

  const PopupTrigger: React.VFC<PopupTriggerProps> = ({ children }) => (
    <div role="button" tabIndex={0} onClick={openPopupState}>
      {children}
    </div>
  );

  return {
    isOpen,
    setOpening,
    PopupTrigger,
  };
};

export default usePopupTrigger;
