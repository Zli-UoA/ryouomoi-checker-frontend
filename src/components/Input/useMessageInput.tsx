import React from 'react';
import useInput from '../../hooks/useInput';
import './useMessageInput.css';

type UseMessageInput = () => {
  inputRef: React.RefObject<HTMLInputElement>;
  MessageInput: React.VFC;
};

const useMessageInput: UseMessageInput = () => {
  const { inputRef, Input } = useInput('messageInput__input', '');
  return {
    inputRef,
    MessageInput: () => (
      <div className="messageInput">
        <Input />
      </div>
    ),
  };
};

export default useMessageInput;
