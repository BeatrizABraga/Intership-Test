/* 3) Descubra a lógica e complete o próximo elemento:


a) 1, 3, 5, 7, ___

b) 2, 4, 8, 16, 32, 64, ____

c) 0, 1, 4, 9, 16, 25, 36, ____

d) 4, 16, 36, 64, ____

e) 1, 1, 2, 3, 5, 8, ____

f) 2,10, 12, 16, 17, 18, 19, ____*/

/*Primeiro item */
const numbersA = [1, 3, 5, 7];
let next = numbersA[numbersA.length - 1] + 2; 
numbersA.push(next); 

console.log(numbersA);

/*Segundo item */
const numbersB = [2, 4, 8, 16, 32, 64]
let next2 = numbersB[numbersB.length - 1 ] * 2
numbersB.push(next2)

console.log(numbersB)

/*Terceiro item */
const numbersC = [0, 1, 4, 9, 16, 25, 36]
const differenceBetween = [3, 5, 7, 9, 11, 13] 
let next3 = numbersC[numbersC.length - 1] + differenceBetween[differenceBetween.length - 1]
numbersC.push(next3)

console.log(numbersC)

/*Quarto item */
const numbersD = [4, 16, 36, 64]
const differenceBetweenD = [12, 20, 28, 36]
let next4 = numbersD[numbersD.length - 1] + 8
numbersD.push(next4)

console.log(numbersD)

/*Quinto item */
const numbersE = [1, 1, 2, 3, 5, 8]
let next5 = numbersE[numbersE.length - 1 ] + numbersE[numbersE.length - 2 ]
numbersE.push(next5)

console.log(numbersE)

/*Sexto item */
const numbersF = [2, 10, 12, 16, 17, 18, 19]
let next6 = numbersF[numbersF.length - 1 ] + 1
numbersF.push(next6)

console.log(numbersF)