import { useState } from 'react';
import { useFetch } from 'usehooks-ts';
import { ValidNumber } from '../../components/HeartRating/useHeartRating';

const baseURL = 'http://localhost:8080';

type ToValidNumber = (n: number) => ValidNumber;
const toValidNumber: ToValidNumber = (n: number) => {
  if (n === 1 || n === 2 || n === 3 || n === 4 || n === 5) {
    return n;
  }
  return 1;
};

type UseGetLovePoint = (id: string) => {
  lovePoint: ValidNumber,
  error: Error | undefined,
  isLoading: boolean,
};

const useGetLovePoint: UseGetLovePoint = (id: string) => {
  type DataType = {
    lovePoint: number
  };

  const token = localStorage.getItem('ryouomoi-checker-token');

  const { data, error } = useFetch<DataType>(`${baseURL}/me/lovers/${id}`, {
    headers: new Headers({ Authorization: `Bearer ${token}` }),
  });

  const [isLoading, setLoading] = useState<boolean>(true);

  const [lovePoint, setLovePoint] = useState<ValidNumber>(/* defaultHeartRaingValue = */ 1);

  if (data !== undefined) {
    setLovePoint(toValidNumber(data.lovePoint));
    setLoading(false);
  }

  return {
    lovePoint,
    error,
    isLoading,
  };
};

export default useGetLovePoint;
