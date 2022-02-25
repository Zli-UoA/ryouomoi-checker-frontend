import { useState } from 'react';
import { ValidNumber } from '../components/HeartRating/HeartRating';

type UseHeartRating = () => {
  rating: ValidNumber,
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
