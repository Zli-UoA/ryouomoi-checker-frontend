import React from 'react';
import { ReactComponent as HeartIconSvg } from './svgIcons/HeartIcon.svg';
import { ReactComponent as BrokenHeartIconSvg } from './svgIcons/BrokenHeartIcon.svg';
import { ReactComponent as WhiteHeartIconSvg } from './svgIcons/WhiteHeartIcon.svg';
import { ReactComponent as EditIconSvg } from './svgIcons/EditIcon.svg';
import { ReactComponent as BackIconSvg } from './svgIcons/BackIcon.svg';
import { ReactComponent as SearchIconSvg } from './svgIcons/SearchIcon.svg';
import { ReactComponent as AddIconSvg } from './svgIcons/AddIcon.svg';
import { ReactComponent as DeleteIconSvg } from './svgIcons/DeleteIcon.svg';
import { ReactComponent as EnabledCheckIconSvg } from './svgIcons/EnabledCheckIcon.svg';
import { ReactComponent as DisabledCheckIconSvg } from './svgIcons/DisabledCheckIcon.svg';
import { ReactComponent as SendIconSvg } from './svgIcons/SendIcon.svg';
import { ReactComponent as HammerHeartIconSvg } from './svgIcons/HammerHeartIcon.svg';

type HeartIconProps = {
  broken?: boolean;
  filled?: boolean;
};

export const HeartIcon: React.VFC<HeartIconProps> = ({
  broken = false,
  filled = false,
}) => {
  if (filled) {
    return (
      <HeartIconSvg />
    );
  }

  if (broken) {
    return (
      <BrokenHeartIconSvg />
    );
  }

  return (
    <WhiteHeartIconSvg />
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
