import { baseURL } from '../../env';
import toValidNumber from '../../lib/toValidNumber';
import ValidNumber from '../../types/ValidNumber';
import useFetchWithAuth from '../useFetchWithAuth';

type DataType = {
  lovePoint: ValidNumber
};

type UseGetLovePoint = (id: string) => {
  lovePoint: ValidNumber,
  error: Error | undefined,
};

const useGetLovePoint: UseGetLovePoint = (id: string) => {
  const { data, error } = useFetchWithAuth<DataType>(`${baseURL}/me/lovers/${id}`);

  let lovePoint: ValidNumber = 1;
  if (data !== undefined) {
    lovePoint = toValidNumber(data.lovePoint);
  }

  return {
    lovePoint,
    error,
  };
};

export default useGetLovePoint;
