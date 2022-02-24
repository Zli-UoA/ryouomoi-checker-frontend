import { useFetch } from 'usehooks-ts';
import { ValidNumber } from '../../components/HeartRating/useHeartRating';
import useGetLovePoint from './useGetLovePoint';

type VoidFunction = () => void;
const baseURL = 'http://localhost:8080';

type UseLovePoint = (id: string) => {
  usePostLovePoint: (lovePoint: ValidNumber) => VoidFunction;
  useDeleteLovePoint: VoidFunction,
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

  const useDeleteLovePoint: VoidFunction = () => {
    useFetch(`${baseURL}/friends/${id}`, {
      method: 'DELETE',
      headers: new Headers({ Authorization: `Bearer ${token}` }),
    });
  };

  return {
    usePostLovePoint,
    useDeleteLovePoint,
    lovePoint,
    isLoading,
  };
};

export default useLovePoint;
