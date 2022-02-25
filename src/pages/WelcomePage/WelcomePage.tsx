import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import '../../common.css';
import './welcomePage.css';
import WithBackground from '../../components/WithBackground/WithBackground';
import UserIcon from '../../components/UserIcon/UserIcon';
import useQuery from '../../hooks/useQuery';
import useGetUserInfo from '../../hooks/useGetUserInfo';

const useStoreToken = (): void => {
  const query = useQuery();
  const token = query.get('auth_token');
  if (token) {
    localStorage.setItem('ryouomoi-checker-token', token);
  }
};

const Page1: React.VFC = () => {
  useStoreToken();
  const data = useGetUserInfo();
  const navigate = useNavigate();

  if (!data) return null;

  console.log(data);

  return (
    <div className="welcomePage">
      <div className="">
        <WithBackground>
          <>
            <div className="welcomePage__icon">
              <UserIcon
                size="lg"
                image={data.imageUrl}
              />
            </div>
            <p className="welcomePage__name">{data.displayName}</p>
            <p className="welcomePage__id">{`@${data.screenName}`}</p>
          </>
        </WithBackground>
      </div>
      <p className="welcomePage__welcome">ようこそ</p>
      <div className="welcomePage__button">
        <Button
          label="恋愛の一歩を踏み出す"
          onClick={
            () => {
              navigate('/home');
            }
          }
        />
      </div>
    </div>
  );
};

export default Page1;
