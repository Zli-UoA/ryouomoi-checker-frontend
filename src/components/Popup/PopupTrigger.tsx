import React, { useState } from 'react';

export type PopupTriggerProps = {
  children: JSX.Element
};

type VoidFunction = () => void;

type UsePopupTrigger = () => {
  isOpen: boolean,
  openPopup: VoidFunction,
  closePopup: VoidFunction,
  PopupTrigger: React.VFC<PopupTriggerProps>
};

const usePopupTrigger: UsePopupTrigger = () => {
  const [isOpen, setOpen] = useState(false);

  const openPopup: VoidFunction = () => {
    setOpen(true);
  };
  const closePopup: VoidFunction = () => {
    setOpen(false);
  };

  const PopupTrigger: React.VFC<PopupTriggerProps> = ({ children }) => (
    <div role="button" tabIndex={0} onClick={openPopup}>
      {children}
    </div>
  );

  return {
    isOpen,
    openPopup,
    closePopup,
    PopupTrigger,
  };
};

export default usePopupTrigger;
