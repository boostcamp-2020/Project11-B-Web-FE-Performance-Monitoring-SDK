import { makeErrorAtSecond, callFromSecondTwoThird } from './second.js';

export const makeErrorAtFirst = () => {
  throw new Error('Error made at first file');
};

export const callFromFirstToSecond = () => {
  makeErrorAtSecond();
};

export const callFromFirstToSecondToThird = () => {
  callFromSecondTwoThird();
};
