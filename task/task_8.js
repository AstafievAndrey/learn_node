/* 
 * Учитывая последовательность слов, вам нужно найти самое высокое слово.
 * Каждая буква слова оценивает точки в соответствии с ее положением в алфавите: 
 *      a = 1, b = 2, c = 3 и т.д.
 * Вам нужно вернуть наивысшее слово счисления в виде строки.
 * Если два слова оценивают одинаково, верните слово, которое появляется раньше 
 * в исходной строке.
 * Все буквы будут иметь строчные буквы, и все входы будут действительны.
 */

let alphabet = {
    a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8, i:9, j:10, k:11, l:12, m:13, n:14, 
    o:15, p:16, q:17, r:18, s:19, t:20, u:21, v:22, w:23, x:24, y:25, z:26
};

let high = (str)=>{
    return str.split(' ').reduce((val, current, index)=>{
        let sum = 0;
        for(let i = 0; i < current.length; i++){
            sum += alphabet[current[i]] ? alphabet[current[i]] : 0;
        }
        if(sum > val.sum){
            val = {index:index, sum:sum, value:current};
        }
        return val;
    },{index:0, sum: 0, value: ''}).value;
}

console.log(high('man i need a taxi up to ubud'));
console.log(high('what time are we climbing up the volcano'));
console.log(high('take me to semynak'));

