export interface IPayload {
  message: string;
  stack: IStack[];
  occuredAt: Date;
  sdk: Information;
  meta: IMeta;
}

interface IMeta {
  browser: Information;
  os: Information;
  url: string;
  ip: string;
}
interface IStack {
  columnNo: string;
  lineNo: string;
  function: string;
  filename: string;
}

interface Information {
  name: string;
  version: string;
}
