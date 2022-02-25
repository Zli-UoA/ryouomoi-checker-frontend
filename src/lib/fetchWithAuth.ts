import JSONbig from 'json-bigint';
import getToken from './getToken';

type Init = {
  method: 'POST' | 'DELETE' | 'GET',
  body: string,
};

const fetchWithAuth = async <T = any>(
  url: string,
  init?: Init,
): Promise<T> => {
  const token = getToken();
  const res = await fetch(url, {
    ...init,
    headers: new Headers({ Authorization: `Bearer ${token}` }),
  });

  const data: T = JSONbig({ storeAsString: true }).parse(await res.text());

  return data;
};

export default fetchWithAuth;
