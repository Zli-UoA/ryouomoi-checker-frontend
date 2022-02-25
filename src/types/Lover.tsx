import ValidNumber from './ValidNumber';

type Lover = {
  user: {
    imageUrl: string;
    biology: string;
    displayName: string;
    screenName: string;
    id: string;
  };
  lovePoint: ValidNumber;
};

export default Lover;
