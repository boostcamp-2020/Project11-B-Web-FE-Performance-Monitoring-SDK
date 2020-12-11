export interface IPayload {
  promise?: string;
  message: string;
  stack: IStack[];
  occuredAt: string;
  sdk: Information;
  meta: IMeta;
  type: string;
  user?: string;
}

export interface IStack {
  columnNo: string;
  lineNo: string;
  function: string;
  filename: string;
}

export interface IMeta {
  browser: Information;
  os: Information;
  url: string;
  [x: string]: any;
}

interface Information {
  name: string;
  version: string;
}

export interface IConfig {
  customTag: { key: string; value: string }[];
  user: string | undefined;
}

export interface ISessionPayload {
  sessionBase: number;
  prevLocation: string;
  presentLocation: string;
  prevTime: number;
  presentTime: number;
  duration: number;
}
