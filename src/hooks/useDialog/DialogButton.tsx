import React from 'react';
import './useDialog.css';
import '../../common.css';

type DialogButtonProps = {
  label: string;
  onClick?: () => void;
};

const DialogButton: React.VFC<DialogButtonProps> = ({
  label, onClick,
}) => (
  <button
    className="dialog__button"
    type="button"
    onClick={onClick}
  >
    {label}
  </button>
);

export default DialogButton;
