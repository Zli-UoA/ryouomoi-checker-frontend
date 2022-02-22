import React, { useRef } from 'react';

type UseInput = (className: string, placeholder: string) => {
  inputRef: React.RefObject<HTMLInputElement>,
  Input: React.VFC<{
    onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void }
  >,
};

const useInput: UseInput = (className, placeholder) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return {
    inputRef,
    Input: ({ onKeyPress }) => (
      <input
        className={className}
        ref={inputRef}
        placeholder={placeholder}
        onKeyPress={onKeyPress}
      />
    ),
  };
};

export default useInput;
