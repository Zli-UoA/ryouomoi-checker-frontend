import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useHeartRating from '../../components/HeartRating/useHeartRating';
import '../../common.css';
import useQuery from '../../hooks/useQuery';

const useNavigateToWelcome = (): void => {
  const navigate = useNavigate();
  const query = useQuery();
  useEffect(() => {
    if (query.get('auth_token')) {
      navigate('/welcome');
    }
  }, [query]);
};

const HomePage: React.VFC = () => {
  const { HeartRating } = useHeartRating();
  useNavigateToWelcome();

  return (
    <div className="bg_primary">
      <HeartRating />
    </div>
  );
};

export default HomePage;
