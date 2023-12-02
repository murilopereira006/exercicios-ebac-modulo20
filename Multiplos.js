const numeroLimite = 1000;

const multiplos = (numeroLimite) => {
    let arrayDeMultiplosDe3ou5 = [];

    for (let i = 0; i < numeroLimite; ++i) {
        if (i % 3 === 0 || i % 5 === 0) {
            arrayDeMultiplosDe3ou5.push(i);
        }
    }

    return arrayDeMultiplosDe3ou5.reduce((accumulator, value) => accumulator + value, 0);
};

module.exports = { multiplos };
