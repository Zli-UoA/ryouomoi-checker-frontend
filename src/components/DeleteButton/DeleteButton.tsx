import React from 'react';
import './deleteButton.css';
import '../../common.css';
import { DeleteIcon } from '../Icon/Icon';

const DeleteButton: React.VFC = () => (
  <button type="button" className="deleteButton">
    <div className="deleteButton__icon">
      <DeleteIcon />
    </div>
  </button>
);

export default DeleteButton;
