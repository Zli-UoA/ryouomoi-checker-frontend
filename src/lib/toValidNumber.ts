import ValidNumber from '../types/ValidNumber';

type ToValidNumber = (n: number) => ValidNumber;

const toValidNumber: ToValidNumber = (n: number) => {
  if (n === 1 || n === 2 || n === 3 || n === 4 || n === 5) {
    return n;
  }
  return 1;
};

export default toValidNumber;
