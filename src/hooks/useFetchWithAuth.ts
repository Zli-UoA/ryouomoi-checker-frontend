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
    statusCode: number | undefined;
  } => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [statusCode, setStatusCode] = useState<number | undefined>(undefined);
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

        setData(json);
        setStatusCode(res.status);
      } catch (e) {
        console.error('error in useFetchWithAuth', e);
        setError(Error('error in useFetchWithAuth'));
      }
    };

    doFetch();
  }, [setError, setData, setStatusCode, url, token]);

  return { data, error, statusCode };
};

export default useFetchWithAuth;
