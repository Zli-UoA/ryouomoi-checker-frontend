import React from 'react';
import { ReactComponent as FilledHeartIconSvg24px } from './svgIcons/FilledHeartIcon24px.svg';
import { ReactComponent as FilledHeartIconSvg40px } from './svgIcons/FilledHeartIcon40px.svg';
import { ReactComponent as EmptyHeartIconSvg40px } from './svgIcons/EmptyHeartIcon40px.svg';
import { ReactComponent as FilledHeartIconSvg } from './svgIcons/FilledHeartIcon.svg';
import { ReactComponent as BrokenHeartIconSvg } from './svgIcons/BrokenHeartIcon.svg';
import { ReactComponent as EmptyHeartIconSvg } from './svgIcons/EmptyHeartIcon.svg';
import { ReactComponent as EditIconSvg } from './svgIcons/EditIcon.svg';
import { ReactComponent as BackIconSvg } from './svgIcons/BackIcon.svg';
import { ReactComponent as SearchIconSvg } from './svgIcons/SearchIcon.svg';
import { ReactComponent as AddIconSvg } from './svgIcons/AddIcon.svg';
import { ReactComponent as DeleteIconSvg } from './svgIcons/DeleteIcon.svg';
import { ReactComponent as EnabledCheckIconSvg } from './svgIcons/EnabledCheckIcon.svg';
import { ReactComponent as DisabledCheckIconSvg } from './svgIcons/DisabledCheckIcon.svg';
import { ReactComponent as SendIconSvg } from './svgIcons/SendIcon.svg';
import { ReactComponent as HammerHeartIconSvg } from './svgIcons/HammerHeartIcon.svg';

export const HeartIcon24: React.VFC = () => (
  <FilledHeartIconSvg24px />
);

type HeartIcon40Props = {
  mode?: 'filled' | 'empty',
};

export const HeartIcon40: React.VFC<HeartIcon40Props> = ({
  mode = 'empty',
}) => {
  if (mode === 'filled') {
    return <FilledHeartIconSvg40px />;
  }
  return <EmptyHeartIconSvg40px />;
};

type HeartIconProps = {
  mode?: 'broken' | 'filled' | 'empty';
};

export const HeartIcon: React.VFC<HeartIconProps> = ({
  mode = 'empty',
}) => {
  if (mode === 'filled') {
    return (
      <FilledHeartIconSvg />
    );
  }

  if (mode === 'broken') {
    return (
      <BrokenHeartIconSvg />
    );
  }

  return (
    <EmptyHeartIconSvg />
  );
};

export const EditIcon: React.VFC = () => (
  <EditIconSvg />
);

export const BackIcon: React.VFC = () => (
  <BackIconSvg />
);

export const SearchIcon: React.VFC = () => (
  <SearchIconSvg />
);

export const AddIcon: React.VFC = () => (
  <AddIconSvg />
);

export const DeleteIcon: React.VFC = () => (
  <DeleteIconSvg />
);

type CheckIconProps = {
  isEnabled?: boolean;
};

export const CheckIcon: React.VFC<CheckIconProps> = ({
  isEnabled = false,
}) => (isEnabled ? <EnabledCheckIconSvg /> : <DisabledCheckIconSvg />);

export const SendIcon: React.VFC = () => (
  <SendIconSvg />
);

export const HammerHeartIcon: React.VFC = () => (
  <HammerHeartIconSvg />
);
