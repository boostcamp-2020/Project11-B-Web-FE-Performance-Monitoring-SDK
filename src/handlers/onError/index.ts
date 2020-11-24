import { name, version } from '../../../package.json';
import { IError, IPayload } from '../type';

const onErrorHandler = (): void => {
  window.onerror = (message, source, line, column, error) => {
    console.log(error);
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
  };
};

export default onErrorHandler;
