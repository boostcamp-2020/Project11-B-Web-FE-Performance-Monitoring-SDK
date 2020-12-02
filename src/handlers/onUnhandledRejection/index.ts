import { name, version } from '../../../package.json';
import { IPayload, IStack, IMeta } from '../type';
import sendError from '../../apis/sendError';
import { parseStack, parseMeta } from '../../utils/parser';

const onUnhandledRejection = (dsn: string): void => {
  window.onunhandledrejection = (rejection: PromiseRejectionEvent) => {
    rejection.promise.catch((error: Error) => {
      if (!error) return;
      const errorType = error.stack ? error.stack.split('\n')[0].split(':')[0] : '';
      const stack: IStack[] = parseStack(error);
      const meta: IMeta = parseMeta();
      const payload: IPayload = {
        promise: 'promise',
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
    });
  };
};
export default onUnhandledRejection;
