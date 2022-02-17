import React, { useRef } from 'react';

type UseInput = (className: string) => {
  inputRef: React.RefObject<HTMLInputElement>,
  Input: JSX.Element,
};

const useInput: UseInput = (className) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return {
    inputRef,
    Input: <input className={className} ref={inputRef} />,
  };
};

export default useInput;
