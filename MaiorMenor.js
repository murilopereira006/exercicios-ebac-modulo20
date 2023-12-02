const maiorEMenor = (array) => {
    let menorIndice = 0;
    let maiorIndice = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[menorIndice] > array[i]) {
            menorIndice = i
        }
        if (array[maiorIndice] < array[i]) {
            maiorIndice = i
        }
    }

    if (menorIndice == 0 && maiorIndice == 0) return 'array vazio ou com valor unico'

    return `O índice do menor número é ${menorIndice} e o índice do maior número é ${maiorIndice}`;
};

module.exports = { maiorEMenor };
