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
  const leveledLovers: UserCardsInfo[] = new Array(5);
  for (let i = 0; i < lovers.length; i += 1) {
    const {
      id,
      displayName,
      imageUrl,
      screenName,
    } = lovers[i].user;
    const idx = lovers[i].lovePoint;

    leveledLovers[idx].push({
      user: {
        displayName,
        imageUrl,
        screenName,
      },
      id: String(id),
      mode: 'Edit',
    });
  }

  return leveledLovers;
};

export default leveledSplit;
