import React from 'react';
import './radioButton.css';

type RadioButtonProps = {
  label: string,
  selected: boolean,
  onClick: () => void
};

const RadioButton: React.VFC<RadioButtonProps> = ({
  label, selected, onClick,
}) => (
  <button type="button" className="radioButton" onClick={onClick}>
    <div className="radioButton__checkBox">
      {
        selected
          ? <div className="radioButton__checkBox--selected" />
          : null
      }
    </div>
    <p className="radioButton__label">{label}</p>
  </button>
);

export default RadioButton;
