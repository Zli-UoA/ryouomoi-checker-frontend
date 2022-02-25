import useFetchWithAuth from './useFetchWithAuth';
import User from '../types/User';
import { baseURLmain } from '../env';

const useGetUserInfo = (): User | undefined => {
  const { data, error } = useFetchWithAuth<User>(`${baseURLmain}/me`);

  if (error) {
    // eslint-disable-next-line
    console.error('error in useGetUserInfo');
  }

  return data;
};

export default useGetUserInfo;
