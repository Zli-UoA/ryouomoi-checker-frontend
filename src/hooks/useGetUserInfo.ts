import useFetchWithAuth from './useFetchWithAuth';
import User from '../types/User';
import { baseURL } from '../env';

const useGetUserInfo = (): User | undefined => {
  const { data, error } = useFetchWithAuth<User>(`${baseURL}/me`);

  if (error) {
    // eslint-disable-next-line
    console.error('error in useGetUserInfo');
  }

  return data;
};

export default useGetUserInfo;
