import JSONbig from 'json-bigint';
import getToken from './getToken';

const fetchWithAuth = async <T = any>(url: string): Promise<T> => {
  const token = getToken();
  const res = await fetch(url, {
    headers: new Headers({ Authorization: `Bearer ${token}` }),
  });

  const data: T = JSONbig({ storeAsString: true }).parse(await res.text());

  console.log('json-bigint result', data);

  return data;
};

export default fetchWithAuth;
