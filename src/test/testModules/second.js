import makeErrorAtThird from './third.js';

export const makeErrorAtSecond = () => {
  throw new Error('Error at 2nd file');
};

export const callFromSecondTwoThird = () => {
  makeErrorAtThird();
};
