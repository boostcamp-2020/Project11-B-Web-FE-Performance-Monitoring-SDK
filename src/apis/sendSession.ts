import { ISessionPayload } from '../handlers/type';

export default (dsn: string) => async (payload: ISessionPayload): Promise<Response | undefined> => {
  try {
    const response = await fetch(`${dsn}/session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    return response;
  } catch (error) {
    return undefined;
  }
};
