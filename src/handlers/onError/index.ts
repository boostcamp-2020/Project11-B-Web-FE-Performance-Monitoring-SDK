import { name, version } from '../../../package.json';
import { IPayload, IStack, IMeta } from '../type';
import sendError from '../../apis/sendError';
import { parseStack, parseMeta } from '../../utils/parser';

const onErrorHandler = (dsn: string): void => {
  window.onerror = (message, source, line, column, error) => {
    if (!error) return;
    const stack: IStack[] = parseStack(error);
    const errorType = error.stack ? error.stack.split('\n')[0].split(':')[0] : '';
    const meta: IMeta = parseMeta();
    const payload: IPayload = {
      type: errorType,
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
