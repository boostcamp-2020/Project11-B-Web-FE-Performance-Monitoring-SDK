import * as Bowser from 'bowser';
import * as ErrorStackParser from 'error-stack-parser';
import { IStack, IMeta, IPayload } from '../handlers/type';
import { name, version } from '../../package.json';

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

export const parseErrorType = (error: Error): string => {
  return error.stack ? error.stack.split('\n')[0].split(':')[0] : '';
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

// Browser
export const browserParser = (error: Error): IPayload => {
  const stack: IStack[] = parseStack(error);
  const errorType = parseErrorType(error);
  const meta: IMeta = parseMeta();
  const payload: IPayload = {
    type: errorType,
    message: error.message || '',
    sdk: {
      name,
      version,
    },
    stack,
    occuredAt: new Date().toString(),
    meta,
  };
  return payload;
};
