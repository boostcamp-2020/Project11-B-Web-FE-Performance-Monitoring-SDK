import { name, version } from '../../../package.json';
import { IError, IPayload } from '../type';

const onUnhandledRejection = (): void => {
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
    });
  };
};

export default onUnhandledRejection;
