export interface IError {
  message: string | Event;
  stack: string | undefined;
}

export interface IPayload {
  sdk: { name: string; version: string };
  error: IError;
}
