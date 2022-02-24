import { useFetch } from 'usehooks-ts';
import useHeartRating, { ValidNumber } from '../../components/HeartRating/useHeartRating';

const baseURL = 'http://localhost:8080';

type UseInitializedHeartRating = (id: string) => {
  error: Error | undefined,
  lovePoint: ValidNumber,
  selectedCount: ValidNumber,
  HeartRating: React.VFC,
};

const useInitializedHeartRating: UseInitializedHeartRating = (id: string) => {
  type DataType = {
    lovePoint: number
  };

  const token = localStorage.getItem('ryouomoi-checker-token');

  const { data, error } = useFetch<DataType>(`${baseURL}/me/lovers/${id}`, {
    headers: new Headers({ Authorization: `Bearer ${token}` }),
  });

  const { selectedCount: selectedCount1, HeartRating: HeartRating1 } = useHeartRating(1);
  const { selectedCount: selectedCount2, HeartRating: HeartRating2 } = useHeartRating(2);
  const { selectedCount: selectedCount3, HeartRating: HeartRating3 } = useHeartRating(3);
  const { selectedCount: selectedCount4, HeartRating: HeartRating4 } = useHeartRating(4);
  const { selectedCount: selectedCount5, HeartRating: HeartRating5 } = useHeartRating(5);

  switch (data?.lovePoint) {
    case 1:
      return {
        error,
        lovePoint: 1,
        selectedCount: selectedCount1,
        HeartRating: HeartRating1,
      };
    case 2:
      return {
        error,
        lovePoint: 2,
        selectedCount: selectedCount2,
        HeartRating: HeartRating2,
      };
    case 3:
      return {
        error,
        lovePoint: 3,
        selectedCount: selectedCount3,
        HeartRating: HeartRating3,
      };
    case 4:
      return {
        error,
        lovePoint: 4,
        selectedCount: selectedCount4,
        HeartRating: HeartRating4,
      };
    case 5:
      return {
        error,
        lovePoint: 5,
        selectedCount: selectedCount5,
        HeartRating: HeartRating5,
      };
    default:
      return {
        error,
        lovePoint: 1,
        selectedCount: selectedCount1,
        HeartRating: HeartRating1,
      };
  }
};

export default useInitializedHeartRating;
