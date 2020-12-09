import sendEngagement from './apis/sendEngagement';
import onErrorHandler from './handlers/onError';
import onUnhandledRejection from './handlers/onUnhandledRejection';
import onManualError from './handlers/onManualError';
import { IConfig } from './handlers/type';

const PanopticonClass = class {
  DSN: string;

  config: IConfig;

  constructor() {
    this.DSN = '';
    this.config = { customTag: [], user: undefined };
  }

  init = (dsn: string) => {
    this.setDSN(dsn);
    sendEngagement(dsn);
  };

  setDSN = (dsn: string) => {
    this.DSN = dsn;
    onErrorHandler(this.DSN, this.config);
    onUnhandledRejection(this.DSN, this.config);
  };

  send = (err: Error) => {
    onManualError(this.DSN, this.config, err);
  };

  setTag = (key: string, value: string) => {
    this.config.customTag.push({ key, value });
    this.setDSN(this.DSN);
  };

  setUser = (_user: string) => {
    this.config.user = _user;
    this.setDSN(this.DSN);
  };
};
const Panopticon = new PanopticonClass();

export default Panopticon;
