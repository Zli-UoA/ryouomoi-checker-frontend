import { useState, useEffect } from 'react';
import JSONbig from 'json-bigint';
import getToken from '../lib/getToken';

type Init = {
  method?: 'POST' | 'DELETE' | 'GET',
  body?: string,
};

const useFetchWithAuth = <T>(
  url: string,
  init?: Init,
): {
    data: T | undefined;
    error: Error | undefined;
  } => {
  const [data, setResponse] = useState<T | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);
  const token = getToken();

  useEffect(() => {
    const doFetch = async (): Promise<void> => {
      try {
        const res = await fetch(url, {
          ...init,
          headers: new Headers({ Authorization: `Bearer ${token}` }),
        });

        const text = await res.text();

        const json: T = JSONbig({ storeAsString: true }).parse(text);

        setResponse(json);
      } catch (e) {
        console.error('error in useFetchWithAuth', e);
        setError(Error('error in useFetchWithAuth'));
      }
    };

    doFetch();
  }, [init, setError, setResponse, url, token]);

  return { data, error };
};

export default useFetchWithAuth;
