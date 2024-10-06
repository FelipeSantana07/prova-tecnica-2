const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const criaSequencia = () => {
    let sequenciaFib = [0, 1]
    while (true) {
        let a = sequenciaFib[sequenciaFib.length - 1]
        let b = sequenciaFib[sequenciaFib.length - 2]

        let proximoFib = a + b

        if (proximoFib > 10000) {
            break;
        }

        sequenciaFib.push(proximoFib);
    }

    return sequenciaFib
}

const testaValorFib = (valorCheck) => {
    if (valorCheck > 10000) {
        return "Número muito alto"
    }

    if (sequenciaFib.includes(valorCheck)) {
        return `Número ${valorCheck} pertence a sequência fibonacci`
    }

    return "Número NÃO pertence a sequência fibonacci"
}

let sequenciaFib = criaSequencia();

rl.question('Informe um número: ', (input) => {
    const numero = parseInt(input, 10);
    
    if (isNaN(numero)) {
        console.log("Por favor, digite um número válido.");
    } else {
        console.log(testaValorFib(numero));
    }

    rl.close();
});
