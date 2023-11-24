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
        console.log('VALOR dE i -> ', array[i])
        console.log('VALOR dE MERNOR -> ', array[menorIndice])
        console.log('VALOR dE MAIOR -> ', array[maiorIndice])
    }

    return `O índice do menor número é ${menorIndice} e o índice do maior número é ${maiorIndice}`;
};

