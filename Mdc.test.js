const { mdc } = require('./Mdc')

describe('Calcula o maior divisor comum entre dois elementos', () => {
    it('retona o mdc entre 12 e 6', () => {
        expect(mdc(12, 6)).toBe(6);
    });
    it('retona o mdc entre 1234 e 651', () => {
        expect(mdc(1234, 651)).toBe(1);
    });
    it('retona o mdc entre 27 e 2', () => {
        expect(mdc(27, 2)).toBe(1);
    });
    it('retona Error caso alguum elemento seja igual a null', () => {
        expect(mdc(2)).toBe('Error');
    });
    it('retona 0 caso alguum elemento seja igual a 0', () => {
        expect(mdc(10, 0)).toBe(0);
    });
});
