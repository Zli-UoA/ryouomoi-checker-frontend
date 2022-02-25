import React from 'react';
import './popupButton.css';
import '../../common.css';

type PopupButtonProps = {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
};

const PopupButton: React.VFC<PopupButtonProps> = ({
  label, disabled, onClick,
}) => (
  <button
    className="popupButton color_white"
    type="button"
    disabled={disabled}
    onClick={onClick}
  >
    {label}
  </button>
);

export default PopupButton;
