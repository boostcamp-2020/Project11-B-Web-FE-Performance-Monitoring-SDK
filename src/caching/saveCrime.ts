import { IPayload } from '../handlers/type';

const saveCrime = (payload: IPayload): void => {
  const localError = localStorage.getItem('crime');
  const errorArr = localError !== null ? JSON.parse(localError) : [];
  errorArr.push(payload);
  localStorage.setItem('crime', JSON.stringify(errorArr));
};

export default saveCrime;
