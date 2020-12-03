import { IMeta } from '../handlers/type';
import { parseStack, parseMeta } from './parser';

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
