import { wordWrap } from '.';

describe('wordWrap', () => {
    test('Hello, World!', () => {
        expect(wordWrap('Hello, World!', 10)).toBe('Hello,\nWorld!');
        expect(wordWrap('Hello, World!', 15)).toBe('Hello, World!');
    });
    
    test('Exact lengths', () => {
        expect(wordWrap('aa aa', 4)).toBe('aa\naa');
        expect(wordWrap('aa aa', 5)).toBe('aa aa');
        expect(wordWrap('aa aa', 6)).toBe('aa aa');
    });
    
    test('Lorem ipsum', () => {
        const srcString = 'Cupidatat nulla Lorem elit velit incididunt ullamco ad voluptate tempor eu labore ex ea aliquip.';
    
        expect(wordWrap(srcString, 5)).toBe('Cupid\natat\nnulla\nLorem\nelit\nvelit\nincid\nidunt\nullam\nco ad\nvolup\ntate\ntempo\nr eu\nlabor\ne ex\nea\naliqu\nip.');
        expect(wordWrap(srcString, 10)).toBe('Cupidatat\nnulla\nLorem elit\nvelit\nincididunt\nullamco ad\nvoluptate\ntempor eu\nlabore ex\nea\naliquip.');
        expect(wordWrap(srcString, 15)).toBe('Cupidatat nulla\nLorem elit\nvelit\nincididunt\nullamco ad\nvoluptate\ntempor eu\nlabore ex ea\naliquip.');
        expect(wordWrap(srcString, 45)).toBe('Cupidatat nulla Lorem elit velit incididunt\nullamco ad voluptate tempor eu labore ex ea\naliquip.');
        expect(wordWrap(srcString, 50)).toBe('Cupidatat nulla Lorem elit velit incididunt\nullamco ad voluptate tempor eu labore ex ea\naliquip.');
        expect(wordWrap(srcString, 51)).toBe('Cupidatat nulla Lorem elit velit incididunt ullamco\nad voluptate tempor eu labore ex ea aliquip.');
    });    
});
