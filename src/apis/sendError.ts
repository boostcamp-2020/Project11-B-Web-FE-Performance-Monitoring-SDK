import { IPayload } from '../handlers/type';
import saveCrime from '../caching/saveCrime';

export default async (payload: IPayload, dsn: string): Promise<void> => {
  try {
    await fetch(`${dsn}/crime`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    saveCrime(payload);
  }
};
