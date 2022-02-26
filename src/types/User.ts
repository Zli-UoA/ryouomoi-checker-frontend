import ValidNumber from './ValidNumber';

type User = {
  imageUrl: string,
  displayName: string,
  screenName: string,
  id: string,
  lovePoint?: ValidNumber,
};

export default User;
