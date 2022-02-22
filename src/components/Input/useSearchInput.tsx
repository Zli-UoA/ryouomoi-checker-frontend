import React from 'react';
import useInput from '../../hooks/useInput';
import './useSearchInput.css';

type UseSearchInput = (onEnter: () => void)=> {
  inputRef: React.RefObject<HTMLInputElement>;
  SearchInput: React.VFC;
};

const useSearchInput: UseSearchInput = (onEnter) => {
  const { inputRef, Input } = useInput('searchInput__input', '検索する');

  return {
    inputRef,
    SearchInput: () => (
      <div className="searchInput">
        <Input onKeyPress={async (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            onEnter();
          }
        }}
        />
      </div>
    ),
  };
};

export default useSearchInput;
