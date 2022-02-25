import { useState, useEffect } from 'react';
import JSONbig from 'json-bigint';
import getToken from '../lib/getToken';

const useFetchWithAuth = <T>(url: string): {
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
          headers: new Headers({ Authorization: `Bearer ${token}` }),
        });

        const text = await res.text();

        const json: T = JSONbig({ storeAsString: true }).parse(text);

        console.log('json-bigint result', json);

        setResponse(json);
      } catch (e) {
        console.error('error in useFetchWithAuth', e);
        setError(Error('error in useFetchWithAuth'));
      }
    };

    doFetch();
  }, [setError, setResponse, url, token]);

  return { data, error };
};

export default useFetchWithAuth;
