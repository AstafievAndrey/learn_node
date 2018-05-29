/*
 * Некоторые цифры имеют смешные свойства. Например:
 *      89 --> 8¹ + 9² = 89 * 1
 *      695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
 *      46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
 * Учитывая положительное целое число n, записанное как abcd ... 
 * (a, b, c, d ... будучи цифрами) и положительное целое число p, 
 * мы хотим найти положительное целое число k, если оно существует, 
 * такое как сумма цифр n, взятых на последовательные степени p, равна k * n. 
 * Другими словами:
 *      Существует ли целое число k, такое как: 
 *      (a ^ p + b ^ (p + 1) + c ^ (p + 2) + d ^ (p + 3) + ...) = n * k
 * Если это так, мы вернем k, иначе -1. 
 * Примечание: n, p всегда будут заданы как строго положительные целые числа.
 */

function digPow(n, p){
    let sum = String(n).split('').reduce(
            (sum, current) => sum += Math.pow(parseInt(current), p++), 0
        );
    return sum%n === 0 ? sum/n : -1
}

function digPow2(n, p){
    n = n.toString();
    let sum = 0;
    for(let i = 0; i < n.length; i++){
        sum += Math.pow(parseInt(n[i]), p++);
    }
    return sum%n === 0 ? sum/n : -1;    
}

console.log(digPow(89,1));
console.log(digPow(92,1));
console.log(digPow(46288,3));