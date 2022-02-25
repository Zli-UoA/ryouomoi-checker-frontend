import { useFetch } from 'usehooks-ts';
import useHeartRating, { ValidNumber } from '../../components/HeartRating/useHeartRating';

const baseURL = 'https://ryouomoichecker.yt8492.com/api';

type UseInitializedHeartRating = (id: string) => {
  error: Error | undefined,
  lovePoint: ValidNumber,
  selectedCount: ValidNumber,
  clearCount: () => void,
  HeartRating: React.VFC,
};

const toValidNumber = (num: number | undefined): ValidNumber => {
  switch (num) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 3:
      return 3;
    case 4:
      return 4;
    case 5:
      return 5;
    default:
      return 1;
  }
};

const useInitializedHeartRating: UseInitializedHeartRating = (id: string) => {
  type DataType = {
    lovePoint: number
  };

  const token = localStorage.getItem('ryouomoi-checker-token');

  const { data, error } = useFetch<DataType>(`${baseURL}/me/lovers/${id}`, {
    headers: new Headers({ Authorization: `Bearer ${token}` }),
  });

  return {
    error,
    lovePoint: toValidNumber(data?.lovePoint),
    ...useHeartRating(toValidNumber(data?.lovePoint)),
  };
};

export default useInitializedHeartRating;
