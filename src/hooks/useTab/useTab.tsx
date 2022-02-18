import React, { useState } from 'react';

type TabName = 'all' | 'follow' | 'follower';

type UseTab = () => {
  Tab: React.VFC,
  selectedTab: TabName
};

const useTab: UseTab = () => {
  const [selectedTab, setTab] = useState<TabName>('all');
  const genSetTab = (target: TabName): (() => void) => () => {
    if (selectedTab === target) return;
    setTab(target);
  };

  const Tab: React.VFC = () => (
    <div className="tab">
      <button
        type="button"
        onClick={genSetTab('all')}
        className={
          selectedTab === 'all'
            ? 'tab__button--selected'
            : 'tab__button'
        }
      >
        全体
      </button>
      <button
        type="button"
        onClick={genSetTab('follow')}
        className={
          selectedTab === 'follow'
            ? 'tab__button--selected'
            : 'tab__button'
        }
      >
        フォロー
      </button>
      <button
        type="button"
        onClick={genSetTab('follower')}
        className={
          selectedTab === 'follower'
            ? 'tab__button--selected'
            : 'tab__button'
        }
      >
        フォロワー
      </button>
    </div>
  );

  return { Tab, selectedTab };
};

export default useTab;
