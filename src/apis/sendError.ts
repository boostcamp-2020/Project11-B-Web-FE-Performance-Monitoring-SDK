import { IPayload } from '../handlers/type';

export default async (payload: IPayload, dsn: string): Promise<Response | undefined> => {
  try {
    const response = await fetch(dsn, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    return response;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
