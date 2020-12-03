import * as Bowser from 'bowser';
import * as ErrorStackParser from 'error-stack-parser';
import { IStack, IMeta } from '../handlers/type';

// stack
export const parseStack = (error: Error): IStack[] => {
  const parsedDataList = ErrorStackParser.parse(error);
  const parsedStackList: IStack[] = parsedDataList.map((data: ErrorStackParser.StackFrame) => {
    const matchedURL = /[a-z]+:\/+[.0-9a-zA-Z]+\//.exec(data.fileName ? data.fileName : '');
    let filename = '';
    if (matchedURL && data.fileName) {
      filename = data.fileName.slice(matchedURL[0].length);
    }
    return {
      columnNo: String(data.columnNumber) || '',
      lineNo: String(data.lineNumber) || '',
      filename,
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
