import onErrorHandler from './handlers/onError';
import onUnhandledRejection from './handlers/onUnhandledRejection';

const Panopticon = {
  init: (): void => {
    onErrorHandler();
    onUnhandledRejection();
  },
};

export default Panopticon;
