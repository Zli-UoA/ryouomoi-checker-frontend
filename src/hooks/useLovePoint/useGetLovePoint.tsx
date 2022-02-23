import { useFetch } from 'usehooks-ts';
import { ValidNumber } from '../../components/HeartRating/useHeartRating';

const baseURL = 'http://localhost::8080';

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
};

const useGetLovePoint: UseGetLovePoint = (id: string) => {
  type DataType = {
    lovePoint: number
  };

  const { data, error } = useFetch<DataType>(`${baseURL}/friends/${id}`);

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
