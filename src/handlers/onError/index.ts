import { IConfig } from '../type';
import sendError from '../../apis/sendError';
import { browserParser } from '../../utils/parser';

const onErrorHandler = (dsn: string, config: IConfig): void => {
  window.onerror = (message, source, line, column, error) => {
    if (!error) return;
    // base
    const payload = browserParser(error);

    // config
    config.customTag.forEach((tag) => {
      payload.meta[tag.key] = tag.value;
    });

    payload.meta.user = config.user;

    sendError(payload, dsn);
  };
};

export default onErrorHandler;
