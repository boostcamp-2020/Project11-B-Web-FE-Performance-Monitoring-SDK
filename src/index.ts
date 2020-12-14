import sendVisits from './apis/sendVisits';
import onErrorHandler from './handlers/onError';
import onUnhandledRejection from './handlers/onUnhandledRejection';
import onManualError from './handlers/onManualError';
import handleSession from './handlers/handleSession';
import { IConfig } from './handlers/type';
import sendSession from './apis/sendSession';

const PanopticonClass = class {
  DSN: string;

  config: IConfig;

  constructor() {
    this.DSN = '';
    this.config = { customTag: [], user: undefined };
  }

  init = (dsn: string) => {
    this.setDSN(dsn);
    sendVisits(dsn);
  };

  setDSN = (dsn: string) => {
    this.DSN = dsn;
    handleSession(sendSession(this.DSN));
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
