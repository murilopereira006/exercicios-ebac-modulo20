const mdc = (a, b) => {
    if (a == null || b == null) return 'Error'
    if (a < b) [a, b] = [b, a];

    if (a !== 0 && b !== 0) {
        // Algoritmo de Euclides iterativo para calcular MDC
        while (b !== 0) {
            var r = a % b;
            a = b;
            b = r;
        }
        return a;
    } else return 0;
};

module.exports = { mdc };
