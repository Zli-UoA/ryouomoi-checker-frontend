import React from 'react';
import './UserIcon.css';

type UserIconProps = {
  image: string,
  size: 'xxs' | 'xs' | 'sm' | 'md' | 'lg'
};

const UserIcon: React.VFC<UserIconProps> = ({
  image, size,
}) => (
  <div className="userIcon">
    <div className={`userIcon--size_${size}`}>
      <img
        src={image}
        alt="user-icon"
        className={`userIcon__image--size_${size}`}
      />
    </div>
  </div>
);

export default UserIcon;
