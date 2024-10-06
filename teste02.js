let lista = []

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificaString(data) {
    data = data.toLowerCase().split('')

    data.forEach(el => {
        if (el == "a") {
            lista.push(el);
        }
    });

    return

    // return data.toLowerCase().split('').forEach(el => {
    //     if (el == "a") {
    //         lista.push(el);
    //     }
    // });
}

function procuraLetraA(lista) {

    if (lista.length === 0) {
        return console.log("Nenhuma letra 'A' encontrada.")
    }

    return console.log("Encontrada " + lista.length + " letras 'A'.")
}

rl.question('Informe uma string: ', (input) => {

    verificaString(input);

    procuraLetraA(lista);

    rl.close();
});
