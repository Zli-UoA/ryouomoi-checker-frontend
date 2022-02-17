import React, { useRef } from 'react';

type UseInput = (className: string, placeholder: string) => {
  inputRef: React.RefObject<HTMLInputElement>,
  Input: React.VFC,
};

const useInput: UseInput = (className, placeholder) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return {
    inputRef,
    Input: () => <input className={className} ref={inputRef} placeholder={placeholder} />,
  };
};

export default useInput;
