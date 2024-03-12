/*5) Escreva um programa que inverta os caracteres de um string. */

function inverterTheStr (str) {
    let result = ""

    for (let i = str.length; i >= 0; i-- ) {
        result += str.charAt(i);
    }
    return result;
}

let inverterWord = inverterTheStr('Responsabilidade')
alert(`A string invertida é escrita da seguinte forma: ${inverterWord}`)
































