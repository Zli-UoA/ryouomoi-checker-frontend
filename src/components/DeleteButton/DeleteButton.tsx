import React from 'react';
import './deleteButton.css';
import '../../common.css';
import { DeleteIcon } from '../Icon/Icon';

const DeleteButton: React.VFC = () => (
  <div className="deleteButton">
    <div className="deleteButton__icon">
      <DeleteIcon />
    </div>
  </div>
);

export default DeleteButton;
