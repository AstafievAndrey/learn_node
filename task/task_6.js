/* 
 * Завершите решение, чтобы он разбил строку на пары из двух символов. 
 * Если строка содержит нечетное число символов, она должна заменить 
 * отсутствующий второй символ последней пары символом подчеркивания ('_').
 */

//let solution = (str)=>{
//    let res = str.split('').reduce((val, current, index)=>{
//        if(val[val.length-1].length === 2){
//            val.push(current);
//        }else{
//            val[val.length-1] += current;
//        }
//        return val;
//    }, ['']);
//    res[res.length-1] = (res[res.length-1].length !== 2) 
//        ? res[res.length-1]+'_' : res[res.length-1];
//    return res;
//}

function solution(str) {
  return (str.length % 2 ? str + '_' : str).match(/../g);
}

console.log(solution('abc'));
console.log(solution('abcdef'));
console.log(solution('abcdefghi'));
