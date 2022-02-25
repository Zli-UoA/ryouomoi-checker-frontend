import { UserCardsInfo } from '../../components/PopupUserList/PopupUserList';
import { ValidNumber } from '../../components/HeartRating/useHeartRating';

export type LoverType = {
  user: {
    id: number,
    displayName: string,
    imageUrl: string,
    screenName: string,
  },
  lovePoint: ValidNumber,
};

const leveledSplit = (lovers: LoverType[]): UserCardsInfo[] => {
  const leveledLovers: UserCardsInfo[] = [[], [], [], [], []];

  lovers.forEach(({
    user: {
      id, displayName, imageUrl, screenName,
    }, lovePoint,
  }) => {
    leveledLovers[lovePoint - 1].push({
      user: {
        displayName,
        imageUrl,
        screenName,
      },
      id: String(id),
      mode: 'Edit',
    });
  });

  return leveledLovers;
};

export default leveledSplit;
