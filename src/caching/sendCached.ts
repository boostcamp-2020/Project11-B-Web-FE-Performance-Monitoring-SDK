import { IPayload } from '../handlers/type';

const sendCached = async (dsn: string): Promise<void> => {
  const localError = localStorage.getItem('crime');
  if (localError === null) return;
  localStorage.removeItem('crime');
  const cachedCrimes: IPayload[] = JSON.parse(localError);
  try {
    await fetch(`${dsn}/crimes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cachedCrimes),
    });
    // eslint-disable-next-line no-empty
  } catch (error) {}
};

export default sendCached;
