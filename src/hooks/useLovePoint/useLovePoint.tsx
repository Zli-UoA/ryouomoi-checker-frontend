import { ValidNumber } from '../../components/HeartRating/useHeartRating';
import useGetLovePoint from './useGetLovePoint';

type VoidFunction = () => void;
const baseURL = 'http://localhost:8080';

type UseLovePoint = (id: string) => {
  usePostLovePoint: (lovePoint: ValidNumber) => VoidFunction;
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

  const token = localStorage.getItem('ryouomoi-checker-token');

  type UsePostLovePoint = (lovePoint: ValidNumber) => VoidFunction;
  const usePostLovePoint: UsePostLovePoint = (newLovePoint) => {
    const usePost: VoidFunction = () => {
      fetch(`${baseURL}/friends/${id}`, {
        method: 'POST',
        body: JSON.stringify({ lovePoint: newLovePoint }),
        headers: new Headers({ Authorization: `Bearer ${token}` }),
      });
    };

    return usePost;
  };

  return {
    usePostLovePoint,
    lovePoint,
  };
};

export default useLovePoint;
