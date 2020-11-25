import onErrorHandler from './handlers/onError';
import onUnhandledRejection from './handlers/onUnhandledRejection';

const Panopticon = {
  init: (dsn: string): void => {
    onErrorHandler(dsn);
    onUnhandledRejection(dsn);
  },
};

export default Panopticon;
