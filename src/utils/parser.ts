import * as Bowser from 'bowser';
import * as ErrorStackParser from 'error-stack-parser';
import { IStack, IMeta } from '../handlers/type';

// stack
export const parseStack = (error: Error): IStack[] => {
  const parsedDataList = ErrorStackParser.parse(error);
  const parsedStackList: IStack[] = parsedDataList.map((data: ErrorStackParser.StackFrame) => {
    return {
      columnNo: String(data.columnNumber) || '',
      lineNo: String(data.lineNumber) || '',
      filename: data.fileName || '',
      function: data.functionName || '',
    };
  });

  return parsedStackList;
};

// meta
export const parseMeta = (): IMeta => {
  const { browser, os } = Bowser.parse(window.navigator.userAgent);
  const metaData: IMeta = {
    browser: {
      name: browser.name || '',
      version: browser.version || '',
    },
    os: {
      name: os.name || '',
      version: os.versionName || '',
    },
    url: window.location.href,
  };
  return metaData;
};
