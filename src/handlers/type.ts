export interface IPayload {
  promise?: string;
  message: string;
  stack: IStack[];
  occuredAt: string;
  sdk: Information;
  meta: IMeta;
  type: string;
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
}

interface Information {
  name: string;
  version: string;
}
