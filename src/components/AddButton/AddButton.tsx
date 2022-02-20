import React from 'react';
import './addButton.css';
import '../../common.css';
import { AddIcon } from '../Icon/Icon';

const AddButton: React.VFC = () => (
  <div className="addButton">
    <div className="addButton__icon">
      <AddIcon />
    </div>
  </div>
);

export default AddButton;
