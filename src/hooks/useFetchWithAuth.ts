import { useFetch } from 'usehooks-ts';
import getToken from '../lib/getToken';

const useFetchWithAuth = <T = any>(url: string): {
  data: T | undefined;
  error: Error | undefined;
} => {
  const token = getToken();

  const { data, error } = useFetch<T>(url, {
    headers: new Headers({ Authorization: `Bearer ${token}` }),
  });

  return { data, error };
};

export default useFetchWithAuth;
