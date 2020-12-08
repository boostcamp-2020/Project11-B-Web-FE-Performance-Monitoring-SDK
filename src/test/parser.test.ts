import { IMeta, IStack } from '../handlers/type';
import { parseStack, parseErrorType, parseMeta } from '../utils/parser';
import {
  makeErrorAtFirst,
  callFromFirstToSecond,
  callFromFirstToSecondToThird,
} from './testModules/first';

describe('test parsing error stack', () => {
  describe('when error happens at 1', () => {
    // callFromFirstToSecondToThird();
    try {
      callFromFirstToSecondToThird();
    } catch (error) {
      it('parses the stack', () => {
        const stack: IStack[] = parseStack(error);
        console.log(stack);
      });
    }
  });

  describe('when error happens at 1 -> 2', () => {
    // callFromFirstToSecond();
    try {
      callFromFirstToSecond();
    } catch (error) {
      it('parses the stack', () => {
        const stack: IStack[] = parseStack(error);
        console.log(stack);
      });
    }
  });

  describe('when error happens at 1 -> 2 -> 3', () => {
    // makeErrorAtFirst();
    try {
      makeErrorAtFirst();
    } catch (error) {
      it('parses the stack', () => {
        const stack: IStack[] = parseStack(error);
        console.log(stack);
      });
    }
  });
});

describe('test parsing error types', () => {
  it('parses new Error() to be type Error', () => {
    expect(parseErrorType(new Error())).toBe('Error');
  });

  it('parses new EvalError() to be type EvalError', () => {
    expect(parseErrorType(new EvalError())).toBe('EvalError');
  });

  it('parses new RangeError() to be type RangeError', () => {
    expect(parseErrorType(new RangeError())).toBe('RangeError');
  });

  it('parses new ReferenceError() to be type ReferenceError', () => {
    expect(parseErrorType(new ReferenceError())).toBe('ReferenceError');
  });

  it('parses new SyntaxError() to be type SyntaxError', () => {
    expect(parseErrorType(new SyntaxError())).toBe('SyntaxError');
  });

  it('parses new TypeError() to be type TypeError', () => {
    expect(parseErrorType(new TypeError())).toBe('TypeError');
  });

  it('parses new URIError() to be type URIError', () => {
    expect(parseErrorType(new URIError())).toBe('URIError');
  });
});

describe('test capturing userAgent and parsing it to meta data', () => {
  describe('when user is using : Chrome, Windows 10, panopticon.gq', () => {
    let meta: IMeta;

    beforeAll(() => {
      (global as any).window = {
        navigator: {
          userAgent:
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
        },
        location: {
          href: 'http://panopticon.gq/',
        },
      };
      meta = parseMeta();
    });

    it('detects brower name and version', () => {
      expect(meta.browser.name).toBe('Chrome');
      expect(meta.browser.version).toBe('86.0.4240.198');
    });

    it('detects os name and version', () => {
      expect(meta.os.name).toBe('Windows');
      expect(meta.os.version).toBe('10');
    });

    it('detects url : panoption.gq', () => {
      expect(meta.url).toBe('http://panopticon.gq/');
    });
  });
});
