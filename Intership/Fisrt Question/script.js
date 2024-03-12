/*1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?*/

let INDICE = 13
let SOMA = 0
let k = 0

while (k < INDICE){
    k += 1
    SOMA += k
}

alert(`O valor da variável SOMA é ${SOMA}`)
