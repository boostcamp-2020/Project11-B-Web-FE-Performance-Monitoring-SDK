import { name, version } from '../../../package.json';
import { IPayload, IStack, IMeta } from '../type';
import sendError from '../../apis/sendError';
import { parseStack, parseMeta } from '../../utils/parser';

const onErrorHandler = (dsn: string): void => {
  window.onerror = (message, source, line, column, error) => {
    if (!error) return;
    parseStack(error);
    const stack: IStack[] = parseStack(error);
    const meta: IMeta = parseMeta();
    const payload: IPayload = {
      message: error.message || '',
      sdk: {
        name,
        version,
      },
      stack,
      occuredAt: new Date().toString(),
      meta,
    };
    sendError(payload, dsn);
  };
};

export default onErrorHandler;
