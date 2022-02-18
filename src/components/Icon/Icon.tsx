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
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 20.9999H6.75L17.81 9.93994L14.06 6.18994L3 17.2499V20.9999ZM5 18.0799L14.06 9.01994L14.98 9.93994L5.92 18.9999H5V18.0799Z" fill="#2C2E5C" />
    <path d="M18.37 3.29006C17.98 2.90006 17.35 2.90006 16.96 3.29006L15.13 5.12006L18.88 8.87006L20.71 7.04006C21.1 6.65006 21.1 6.02006 20.71 5.63006L18.37 3.29006Z" fill="#2C2E5C" />
  </svg>
);

export const BackIcon: React.VFC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#2C2E5C" />
  </svg>
);

export const SearchIcon: React.VFC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#2C2E5C" />
  </svg>
);

export const AddIcon: React.VFC = () => (
  <AddIconSvg />
);

export const DeleteIcon: React.VFC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z" fill="#2C2E5C" />
  </svg>
);

export const CheckIcon: React.VFC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.99997 16.1701L4.82997 12.0001L3.40997 13.4101L8.99997 19.0001L21 7.00009L19.59 5.59009L8.99997 16.1701Z" fill="#2C2E5C" />
  </svg>
);

export const SendIcon: React.VFC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="#2C2E5C" />
  </svg>
);
