import React from 'react';
import './popupButton2.css';
import '../../common.css';
import { useFetch } from 'usehooks-ts';

type PopupButton2Props = {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
};

const PopupButton2: React.VFC<PopupButton2Props> = ({
  label, disabled, onClick,
}) => {
  type DataType = {
    match_success: boolean,
  };
  const { data, error } = useFetch<DataType>(`http://localhost:8080/friends/${id}`);

  if (error) {
    console.log(error);
  }

  return (
    <button
      className="popup__button color_white"
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default PopupButton2;
