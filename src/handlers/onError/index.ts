import { name, version } from '../../../package.json';
import { IError, IPayload } from '../type';
import sendError from '../../apis/sendError';

const onErrorHandler = (dsn: string): void => {
  window.onerror = (message, source, line, column, error) => {
    const errorObject: IError = {
      message,
      stack: error?.stack,
    };

    const payload: IPayload = {
      sdk: {
        name,
        version,
      },
      error: errorObject,
    };
    sendError(payload, dsn);
  };
};

export default onErrorHandler;
