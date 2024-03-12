/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. */


const number = Number(window.prompt('Digite um número e veja se ele está na sequência de Fibonacci'))


function fibonacci(n) {
    let sequence = [0, 1];

    for (let i = 2; i < n; i++) {
        let next = sequence[i - 1] + sequence[i - 2]
        sequence.push(next);
    }
    //

    console.log(sequence)
    return sequence;
}

const sequenc = fibonacci(number + 2)

if (sequenc.includes(number)) {
    alert(`O número informado pertence a sequência de Fibonacci`)
} else {
    alert(`O número informado não pertence a sequência de Fibonacci`)
}