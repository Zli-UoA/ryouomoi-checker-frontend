import React from 'react';
import useHeartRating from '../../components/HeartRating/useHeartRating';
import '../../common.css';

const HomePage: React.VFC = () => {
  const { HeartRating } = useHeartRating();

  return (
    <div className="bg_primary">
      <HeartRating />
    </div>
  );
};

export default HomePage;
