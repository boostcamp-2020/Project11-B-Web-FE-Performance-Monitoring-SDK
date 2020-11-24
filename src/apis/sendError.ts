import { IPayload } from '../handlers/type';

export default async (payload: IPayload, dsn: string): Promise<Response> => {
  const response = await fetch(dsn, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  return response;
};
