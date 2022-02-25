import { ValidNumber } from '../../components/HeartRating/useHeartRating';
import useInitializedHeartRating from './useInitializedHeartRating';
import fetchWithAuth from '../../lib/fetchWithAuth';
import { baseURL } from '../../env';

type VoidFunction = () => void;

type UseLovePoint = (id: string) => {
  postLovePoint: (lovePoint: ValidNumber) => void;
  deleteLovePoint: VoidFunction,
  lovePoint: ValidNumber,
  selectedCount: ValidNumber,
  clearCount: VoidFunction,
  HeartRating: React.VFC,
};

const useLovePoint: UseLovePoint = (id: string) => {
  const {
    error: GETerror,
    lovePoint,
    selectedCount,
    clearCount,
    HeartRating,
  } = useInitializedHeartRating(id);

  if (GETerror) {
    console.error(GETerror);
  }

  type PostLovePoint = (lovePoint: ValidNumber) => void;
  const postLovePoint: PostLovePoint = (newLovePoint) => {
    fetchWithAuth(`${baseURL}/friends/${id}`, {
      method: 'POST',
      body: JSON.stringify({ lovePoint: newLovePoint }),
    });
  };

  const deleteLovePoint: VoidFunction = () => {
    fetchWithAuth(`${baseURL}/friends/${id}`, {
      method: 'DELETE',
    });
  };

  return {
    postLovePoint,
    deleteLovePoint,
    lovePoint,
    selectedCount,
    clearCount,
    HeartRating,
  };
};

export default useLovePoint;
