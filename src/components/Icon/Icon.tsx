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

export const CheckIcon: React.VFC = () => (
  <CheckIcon />
);

export const SendIcon: React.VFC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="#2C2E5C" />
  </svg>
);
