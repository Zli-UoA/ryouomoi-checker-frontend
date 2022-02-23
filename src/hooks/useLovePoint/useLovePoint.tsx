import { useFetch } from 'usehooks-ts';
import { ValidNumber } from '../../components/HeartRating/useHeartRating';
import useGetLovePoint from './useGetLovePoint';

const baseURL = 'http://localhost::8080';

type UseLovePoint = (id: string) => {
  postLovePoint: (lovePoint: ValidNumber) => void,
  lovePoint: ValidNumber,
};

const useLovePoint: UseLovePoint = (id: string) => {
  const {
    lovePoint,
    error: GETerror,
  } = useGetLovePoint(id);

  if (GETerror) {
    console.error(GETerror);
  }

  type PostLovePoint = (lovePoint: ValidNumber) => boolean;
  const postLovePoint: PostLovePoint = (newLovePoint) => {
    type DataType = {
      match_success: boolean,
    };
    const { data, error } = useFetch<DataType>(`${baseURL}/friends/${id}`, {
      method: 'POST',
      body: JSON.stringify({ newLovePoint }),
    });

    if (error) {
      console.error(error);
    }

    if (data === undefined) return false;
    return data.match_success;
  };

  return {
    postLovePoint,
    lovePoint,
  };
};

export default useLovePoint;
