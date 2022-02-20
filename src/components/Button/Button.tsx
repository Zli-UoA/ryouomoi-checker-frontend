import React from 'react';
import './button.css';
import '../../common.css';

type ButtonProps = {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
};

const Button: React.VFC<ButtonProps> = ({
  label, disabled, onClick,
}) => (
  <button
    className="button bg_primary color_white"
    type="button"
    disabled={disabled}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
