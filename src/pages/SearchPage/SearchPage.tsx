import React from 'react';
import Header from '../../components/Header/Header';
import { BackIcon } from '../../components/Icon/Icon';
import useSearchInput from '../../components/Input/useSearchInput';
import '../../common.css';
import UserIcon from '../../components/UserIcon/UserIcon';

const SearchPage: React.VFC = () => {
  const { SearchInput } = useSearchInput();
  return (
    <div>
      <div style={{ display: 'box' }}>
        <Header>
          <>
            <BackIcon />
            <SearchInput />
          </>
        </Header>
      </div>
      <div style={{ paddingTop: '200px' }}>
        <div>
          <span className="color_primarySolid">検索ボックス</span>
          に
          <br />
          キーワードを入力してください
        </div>
        {
          new Array(100).fill(
            <div style={{ display: 'flex' }}>
              <UserIcon
                size="sm"
                image="https://pbs.twimg.com/profile_images/1429604062127792132/4JPTr6M9_400x400.jpg"
              />
              <div>
                <h3>会津夏那子</h3>
                <p>@kanako</p>
              </div>
            </div>,
          )
        }
      </div>
    </div>
  );
};

export default SearchPage;
