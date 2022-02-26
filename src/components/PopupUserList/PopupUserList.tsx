import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useOpen from '../../hooks/useOpen';
import useHeartRating from '../../hooks/useHeartRating';
import Popup from '../Popup/Popup';
import ClickableUserCard from '../ClickableUserCard/ClickableUserCard';
import User from '../../types/User';
import fetchWithAuth from '../../lib/fetchWithAuth';
import { baseURL } from '../../env';

type PopupUserListProps = {
  users: User[]
};

const PopupUserList: React.VFC<PopupUserListProps> = ({ users }) => {
  const { isOpen, close, open } = useOpen();

  const [whichUser, setWhichUser] = useState<User>({
    imageUrl: 'dummyUrl',
    id: 'dummyId',
    screenName: 'dummyScreenName',
    displayName: 'dummyDisplayName',
  });

  useEffect(() => {
    users.forEach((user) => setWhichUser(user));
  }, [users]);

  const { rating, setRating, clearRating } = useHeartRating();

  const genOnCardClick = (user: User) => (): void => {
    setWhichUser(user);

    if (whichUser.lovePoint) {
      setRating(whichUser.lovePoint);
    }

    open();
  };

  const navigate = useNavigate();

  const primaryAction = async (): Promise<void> => {
    const data = await fetchWithAuth<{
      matchSuccess: boolean
    }>(`${baseURL}/friends/${whichUser.id}`, {
      method: 'POST',
      body: JSON.stringify({ lovePoint: rating }),
    });

    if (data.matchSuccess) {
      localStorage.setItem('matchSuccess', 'true');
      navigate('/celebration');
    }

    close();
    clearRating();
  };

  const cancelAction = (): void => {
    close();
    clearRating();
  };

  const deleteAction = async (): Promise<void> => {
    fetchWithAuth(`${baseURL}/me/lovers/${whichUser.id}`, {
      method: 'DELETE',
    });
    close();
    clearRating();
  };

  return (
    <div>
      {users.map((user) => (
        <ClickableUserCard user={user} onClick={genOnCardClick(user)} />
      ))}
      <Popup
        user={whichUser}
        isOpen={isOpen}
        heartRating={rating}
        setHeartRating={setRating}
        primaryAction={primaryAction}
        cancelAction={cancelAction}
        deleteAction={deleteAction}
      />
    </div>
  );
};

export default PopupUserList;
