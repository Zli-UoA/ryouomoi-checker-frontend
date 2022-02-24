import { ValidNumber } from '../../components/HeartRating/useHeartRating';
import useInitializedHeartRating from './useInitializedHeartRating';

type VoidFunction = () => void;
const baseURL = 'https://ryouomoichecker.yt8492.com/api';

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

  const token = localStorage.getItem('ryouomoi-checker-token');

  type PostLovePoint = (lovePoint: ValidNumber) => void;
  const postLovePoint: PostLovePoint = (newLovePoint) => {
    fetch(`${baseURL}/friends/${id}`, {
      method: 'POST',
      body: JSON.stringify({ lovePoint: newLovePoint }),
      headers: new Headers({ Authorization: `Bearer ${token}` }),
    });
  };

  const deleteLovePoint: VoidFunction = () => {
    fetch(`${baseURL}/friends/${id}`, {
      method: 'DELETE',
      headers: new Headers({ Authorization: `Bearer ${token}` }),
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
