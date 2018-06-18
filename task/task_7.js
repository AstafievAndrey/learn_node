/* 
 * Напишите функцию, которая принимает строку круглых скобок и определяет, 
 * действителен ли порядок скобок. 
 * Функция должна возвращать true, если строка действительна, 
 * и false, если она недействительна.
 * http://jsben.ch/LlwDG -- ссылка на тест по скорости
 */

let validParenthesesReduce = (parens)=>{
    let res = parens.split('').reduce(
            (val, current) => {
                if(val === -1){
                    return val;
                }
                if(current==='('){
                    return ++val;
                }
                if(current === ')'){
                    if(val > 0){
                        return --val;
                    }else{
                        return -1;
                    }
                }
                return val;
            }, 
            0
        );
    return  res === 0 ? true : false;
}

let validParenthesesWhile = (parens)=>{
    let tokenizer = /[()]/g, 
        count = 0,           
        token;
    while(token = tokenizer.exec(parens), token !== null){
        if(token == "(") {
           count++;
        } else if(token == ")") {
            count--;
            if(count < 0) {
               return false;
            }
        }
    }
    return count == 0;
} 

console.log(validParenthesesReduce(')'));
console.log(validParenthesesReduce('())'));
console.log(validParenthesesReduce('(())'));
console.log(validParenthesesReduce(')('));
console.log('--------------------------');
console.log(validParenthesesWhile(')'));
console.log(validParenthesesWhile('())'));
console.log(validParenthesesWhile('(())'));
console.log(validParenthesesWhile(')('));