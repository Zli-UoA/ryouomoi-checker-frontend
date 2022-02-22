import React from 'react';
import useInput from '../../hooks/useInput';
import './useSearchInput.css';

export type OnEnter = (inputRef: React.RefObject<HTMLInputElement>) => void;

type UseSearchInput = (onEnter: OnEnter)=> {
  SearchInput: React.VFC;
};

const useSearchInput: UseSearchInput = (onEnter) => {
  const { inputRef, Input } = useInput('searchInput__input', '検索する');

  return {
    SearchInput: () => (
      <div className="searchInput">
        <Input onKeyPress={async (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            onEnter(inputRef);
          }
        }}
        />
      </div>
    ),
  };
};

export default useSearchInput;
