import { IPayload } from '../handlers/type';
import saveCrime from '../caching/saveCrime';
import sendCached from '../caching/sendCached';

export default async (payload: IPayload, dsn: string): Promise<void> => {
  try {
    await fetch(`${dsn}/crime`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    sendCached(dsn);
  } catch (error) {
    saveCrime(payload);
  }
};
