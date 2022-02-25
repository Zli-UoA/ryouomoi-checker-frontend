import getToken from './getToken';

const fetchWithAuth = async <T = any>(url: string): Promise<T> => {
  const token = getToken();
  const res = await fetch(url, {
    headers: new Headers({ Authorization: `Bearer ${token}` }),
  });

  const data: T = await res.json();
  return data;
};

export default fetchWithAuth;
