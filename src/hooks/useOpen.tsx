import { useState } from 'react';

type UseOpen = (init?: boolean) => {
  isOpen: boolean,
  close: () => void,
  open: () => void
};

const useOpen: UseOpen = (init = false) => {
  const [isOpen, setOpen] = useState(init);
  return {
    isOpen,
    close: () => setOpen(false),
    open: () => setOpen(true),
  };
};

export default useOpen;
