import React from 'react';
import { useFetch } from 'usehooks-ts';
import Button from '../components/Button/Button';
import { baseURL } from '../env';

const UseTwitterLogin: React.VFC = () => {
  const { data, error } = useFetch<{
    loginUrl: string
  }>(`${baseURL}/twitter/login`);

  if (data !== undefined) {
    return (
      <Button
        label="Twitterで登録"
        onClick={
          () => {
            // eslint-disable-next-line
            location.href = data.loginUrl;
          }
        }
      />
    );
  }

  if (error) {
    // eslint-disable-next-line
    console.error(error);
  }

  return (
    <Button label="Twitterで登録" disabled />
  );
};

export default UseTwitterLogin;
