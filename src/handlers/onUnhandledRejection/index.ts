import { name, version } from '../../../package.json';
import { IError, IPayload } from '../type';
import sendError from '../../apis/sendError';

const onUnhandledRejection = (dsn: string): void => {
  window.onunhandledrejection = (rejection: PromiseRejectionEvent) => {
    rejection.promise.catch((error: Error) => {
      const errorObject: IError = {
        message: error.message,
        stack: error.stack,
      };

      const payload: IPayload = {
        sdk: {
          name,
          version,
        },
        error: errorObject,
      };
      sendError(payload, dsn);
    });
  };
};

export default onUnhandledRejection;
