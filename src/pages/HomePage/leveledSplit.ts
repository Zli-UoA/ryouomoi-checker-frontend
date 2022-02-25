import User from '../../types/User';

// Required はオプショナルプロパティを必須にした方を返します

const leveledSplit = (users: Required<User>[]): Required<User>[][] => {
  const leveledLovers: Required<User>[][] = [[], [], [], [], []];

  users.forEach(({ lovePoint, ...user }) => {
    leveledLovers[lovePoint - 1].push({
      lovePoint, ...user,
    });
  });

  return leveledLovers;
};

export default leveledSplit;
