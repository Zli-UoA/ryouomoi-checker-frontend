import { useFetch } from 'usehooks-ts';
import useHeartRating, { ValidNumber } from '../../components/HeartRating/useHeartRating';
import { baseURL } from '../../env';

type UseInitializedHeartRating = (id: string) => {
  error: Error | undefined,
  lovePoint: ValidNumber,
  selectedCount: ValidNumber,
  clearCount: () => void,
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

  const {
    selectedCount: selectedCount1,
    HeartRating: HeartRating1,
    clearCount: clearCount1,
  } = useHeartRating(1);
  const {
    selectedCount: selectedCount2,
    HeartRating: HeartRating2,
    clearCount: clearCount2,
  } = useHeartRating(2);
  const {
    selectedCount: selectedCount3,
    HeartRating: HeartRating3,
    clearCount: clearCount3,
  } = useHeartRating(3);
  const {
    selectedCount: selectedCount4,
    HeartRating: HeartRating4,
    clearCount: clearCount4,
  } = useHeartRating(4);
  const {
    selectedCount: selectedCount5,
    HeartRating: HeartRating5,
    clearCount: clearCount5,
  } = useHeartRating(5);

  switch (data?.lovePoint) {
    case 1:
      return {
        error,
        lovePoint: 1,
        selectedCount: selectedCount1,
        HeartRating: HeartRating1,
        clearCount: clearCount1,
      };
    case 2:
      return {
        error,
        lovePoint: 2,
        selectedCount: selectedCount2,
        HeartRating: HeartRating2,
        clearCount: clearCount2,
      };
    case 3:
      return {
        error,
        lovePoint: 3,
        selectedCount: selectedCount3,
        HeartRating: HeartRating3,
        clearCount: clearCount3,
      };
    case 4:
      return {
        error,
        lovePoint: 4,
        selectedCount: selectedCount4,
        HeartRating: HeartRating4,
        clearCount: clearCount4,
      };
    case 5:
      return {
        error,
        lovePoint: 5,
        selectedCount: selectedCount5,
        HeartRating: HeartRating5,
        clearCount: clearCount5,
      };
    default:
      return {
        error,
        lovePoint: 1,
        selectedCount: selectedCount1,
        HeartRating: HeartRating1,
        clearCount: clearCount1,
      };
  }
};

export default useInitializedHeartRating;
