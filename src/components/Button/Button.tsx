import React from 'react';
import './button.css';
import '../../common.css';

type ButtonProps = {
  label: string;
  disabled?: boolean;
};

const Button: React.VFC<ButtonProps> = ({
  label, disabled,
}) => (
  <button
    className="button bg_primary color_white"
    type="button"
    disabled={disabled}
  >
    {label}
  </button>
);

export default Button;
