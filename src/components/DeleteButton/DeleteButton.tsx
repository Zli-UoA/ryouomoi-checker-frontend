import React from 'react';
import './deleteButton.css';
import '../../common.css';
import { DeleteIcon } from '../Icon/Icon';

type DeleteButtonProps = {
  onClick?: () => void;
};

const DeleteButton: React.VFC<DeleteButtonProps> = ({ onClick }) => (
  <button type="button" onClick={onClick} className="deleteButton">
    <div className="deleteButton__icon">
      <DeleteIcon />
    </div>
  </button>
);

export default DeleteButton;
