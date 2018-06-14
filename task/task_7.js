/* 
 * Напишите функцию, которая принимает строку круглых скобок и определяет, 
 * действителен ли порядок скобок. 
 * Функция должна возвращать true, если строка действительна, 
 * и false, если она недействительна.
 */

let validParentheses = (parens)=>{
    let res = parens.split('').reduce(
            (val, current) => {
                if(current==='('){
                    return ++val;
                }
                if(current === ')'){
                    if(val > 0){
                        return --val;
                    }else{
                        val = -1;
                        break;
                    }
                }
                return val;
            }, 
            0
        );
    return  res === 0 ? true : false;
}

console.log(validParentheses(')'));
console.log(validParentheses('())'));
console.log(validParentheses('(())'));
console.log(validParentheses(')('));

//Test.assertEquals(validParentheses( "()" ), true);
//Test.assertEquals(validParentheses( "())" ), false);