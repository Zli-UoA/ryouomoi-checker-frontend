import React from 'react';
import useInput from '../../hooks/useInput';
import './useSearchInput.css';

type UseSearchInput = () => {
  inputRef: React.RefObject<HTMLInputElement>;
  SearchInput: React.VFC;
};

const useSearchInput: UseSearchInput = () => {
  const { inputRef, Input } = useInput('searchInput__input');
  return {
    inputRef,
    SearchInput: () => (
      <div className="searchInput">
        <Input />
      </div>
    ),
  };
};

export default useSearchInput;
