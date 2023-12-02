const { maiorEMenor } = require('./MaiorMenor')

describe('Ao enviar um array a funcao retorna o indice do menor e do maior numero presento no array', () => {
    it('retorna o indice do maior e menor numero no array', () => {
        expect(maiorEMenor([2, 3, 4, 1])).toBe('O índice do menor número é 3 e o índice do maior número é 2');
        expect(maiorEMenor([21, 40, 2, 503, 4, 2, 1])).toBe('O índice do menor número é 6 e o índice do maior número é 3');
    });
    it('retorna frase ao receber um array vazio', () => {
        expect(maiorEMenor([])).toBe('array vazio ou com valor unico');
    });
    it('retorna frase ao receber um array de um unico elemento', () => {
        expect(maiorEMenor([])).toBe('array vazio ou com valor unico');
    });
});
