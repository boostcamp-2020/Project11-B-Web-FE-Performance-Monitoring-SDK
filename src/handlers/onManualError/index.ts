import { IConfig } from '../type';
import sendError from '../../apis/sendError';
import { browserParser } from '../../utils/parser';

const onManualError = (dsn: string, config: IConfig, error: Error): void => {
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

export default onManualError;
