import onErrorHandler from './handlers/onError';
import onUnhandledRejection from './handlers/onUnhandledRejection';
import onManualError from './handlers/onManualError';

const PanopticonClass = class {
  DSN: string;

  constructor() {
    this.DSN = '';
  }

  init = (dsn: string) => {
    this.DSN = dsn;
    onErrorHandler(this.DSN);
    onUnhandledRejection(this.DSN);
  };

  send = (err: Error) => {
    onManualError(this.DSN, err);
  };
};
const Panopticon = new PanopticonClass();

export default Panopticon;
