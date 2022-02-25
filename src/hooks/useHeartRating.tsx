import { useState } from 'react';
import { ValidNumber } from '../components/HeartRating/useHeartRating';

type UseHeartRating = () => {
  rating: number,
  setRating: (num: ValidNumber) => void,
  clearRating: () => void,
};

const useHeartRating: UseHeartRating = () => {
  const [rating, setRating] = useState<ValidNumber>(1);

  return {
    rating,
    setRating,
    clearRating: () => setRating(1),
  };
};

export default useHeartRating;
