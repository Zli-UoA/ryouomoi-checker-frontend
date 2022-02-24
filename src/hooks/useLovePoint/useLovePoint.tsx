import { ValidNumber } from '../../components/HeartRating/useHeartRating';
import useGetLovePoint from './useGetLovePoint';

type VoidFunction = () => void;
const baseURL = 'http://localhost:8080';

type UseLovePoint = (id: string) => {
  postLovePoint: (lovePoint: ValidNumber) => VoidFunction;
  deleteLovePoint: VoidFunction,
  lovePoint: ValidNumber,
  isLoading: boolean,
};

const useLovePoint: UseLovePoint = (id: string) => {
  const {
    lovePoint,
    error: GETerror,
    isLoading,
  } = useGetLovePoint(id);

  if (GETerror) {
    console.error(GETerror);
  }

  const token = localStorage.getItem('ryouomoi-checker-token');

  type PostLovePoint = (lovePoint: ValidNumber) => VoidFunction;
  const postLovePoint: PostLovePoint = (newLovePoint) => {
    const post: VoidFunction = () => {
      fetch(`${baseURL}/friends/${id}`, {
        method: 'POST',
        body: JSON.stringify({ lovePoint: newLovePoint }),
        headers: new Headers({ Authorization: `Bearer ${token}` }),
      });
    };

    return post;
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
    isLoading,
  };
};

export default useLovePoint;
