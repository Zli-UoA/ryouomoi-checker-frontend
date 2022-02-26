import React from 'react';
import '../../common.css';
import './HakyokuProcessPage.css';
import { Link } from 'react-router-dom';
import UserIcon from '../../components/UserIcon/UserIcon';
import Header from '../../components/Header/Header';
import { BackIcon } from '../../components/Icon/Icon';
import useHakyokuForm from '../../hooks/useHakyokuForm/useHakyokuForm';
import useShareToggleButton from './useShareToggleButton';
import Button from '../../components/Button/Button';
import useDialog from '../../hooks/useDialog/useDialog';
import useFetchWithAuth from '../../hooks/useFetchWithAuth';
import { baseURL } from '../../env';
import User from '../../types/User';

type HeaderProps = {
  imageUrl: string,
};

const HakyokuProcessPageHeader: React.VFC<HeaderProps> = ({ imageUrl }) => (
  <Header>
    <div className="hakyokuProcessPage__header">
      <Link to="/celebration">
        <BackIcon />
      </Link>
      <div>
        <div className="hakyokuProcessPage__title">
          破局手続き
        </div>
      </div>

      <div>
        <UserIcon image={imageUrl} size="xs" />
      </div>
    </div>
  </Header>
);

const HakhyokuProcessPageContent: React.VFC = () => {
  const { reasonId, selected, HakyokuForm } = useHakyokuForm();
  const { checked, ShareToggleButton } = useShareToggleButton();
  const { Dialog, openDialog } = useDialog();
  const { data } = useFetchWithAuth<{
    days: number,
  }>(`${baseURL}/me/lover/days`);

  return (
    <>
      {/* 空のdivだが、ヘッダーが position: fixed なためヘッダー分(64px)を調整 */}
      <div style={{ height: '64px' }} />
      <div className="hakyokuProcessPage__form">
        <HakyokuForm />
      </div>
      <div className="hakyokuProcessPage__share">
        <ShareToggleButton />
      </div>
      <div className="hakyokuProcessPage__submitButton">
        <Button label="破局した" disabled={!selected} onClick={openDialog} />
      </div>
      <Dialog days={data?.days} reasonId={reasonId || /* その他 = */6} arrowShare={checked} />
    </>
  );
};

const HakyokuProcessPage: React.VFC = () => {
  const { data } = useFetchWithAuth<User>(`${baseURL}/me`);
  if (data === undefined) return null;

  return (
    <div className="hakyokuProcessPage">
      <HakyokuProcessPageHeader imageUrl={data.imageUrl} />
      <HakhyokuProcessPageContent />
    </div>
  );
};

export default HakyokuProcessPage;
