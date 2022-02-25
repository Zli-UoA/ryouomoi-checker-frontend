const getToken = (): string | null => localStorage.getItem('ryouomoi-checker-token');
export default getToken;
